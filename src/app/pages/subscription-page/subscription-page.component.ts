import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MovieItemComponent } from "@components/movie-item/movie-item.component";
import { SubscriptionSuccessComponent } from "@components/subscription-success/subscription-success.component";
import { genreIds } from "@constants/genre-ids";
import { subscriptionFields } from "@constants/subscription-fields";
import { Subscription } from "@models/subscription.interface";
import { Store } from "@ngrx/store";
import { CountryCityService } from "@services/country-city/country-city.service";
import { DropdownComponent } from "@shared/dropdown/dropdown.component";
import { ModalComponent } from "@shared/modal/modal.component";
import { AppState } from "@store/index";
import { setSubscriptionFields } from "@store/subscription/actions";
import * as subscriptionActions from "@store/subscription/actions";
import { selectData, selectIsSubscribed } from "@store/subscription/selectors";
import { SvgIconComponent } from "angular-svg-icon";
import { ICity,ICountry } from "country-state-city"
import { Observable } from "rxjs";

@Component({
  selector: "app-subscription-page",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MovieItemComponent,
    SvgIconComponent,
    DropdownComponent,
    ModalComponent,
    SubscriptionSuccessComponent,
    AsyncPipe
  ],
  templateUrl: "./subscription-page.component.html",
  styleUrls: ["./subscription-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionPageComponent implements OnInit, OnDestroy {
  protected readonly fields = subscriptionFields;
  data$: Observable<Subscription>;
  isSubscribed$: Observable<boolean>;
  countries: ICountry[] = [];
  cities: ICity[] = [];
  filteredCountries: ICountry[] = [];
  filteredCities: ICity[]  = [];
  selectedCountry: ICountry | null = null;
  selectedCity: ICity | null = null;
  genres: string[] = [];
  filteredGenres: string[] = [];
  selectedGenres: string[] = [];
  isGenresDropdownOpened = false;
  isCountryDropdownOpened = false;
  isCityDropdownOpened = false;
  genreError: string | null = null;
  showModal = false;

  @ViewChild("genresDropdown") genresDropdown!: ElementRef;
  @ViewChild("countryDropdown") countryDropdown!: ElementRef;
  @ViewChild("cityDropdown") cityDropdown!: ElementRef;

  subscriptionForm: FormGroup = this.formBuilder.group(
    this.fields.reduce((group, field) => {
      const validators = field.required ? [Validators.required] : [];

      if (field.formControlName === "email") {
        validators.push(Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));
      }

      group[field.formControlName] = [
        { value: "", disabled: field.formControlName === "city" },
        validators
      ];
      return group;
    }, {} as { [key: string]: [string | { value: string, disabled: boolean }, Validators[]] })
  );

  constructor(private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private countryCityService: CountryCityService) {
    this.data$ = this.store.select(selectData);
    this.isSubscribed$ = this.store.select((selectIsSubscribed));
  }

  ngOnInit() {
    this.addAdditionalControls();

    this.genres = Object.values(genreIds);
    this.filteredGenres = this.genres;
    document.addEventListener("click", this.onClickOutsideHandler.bind(this));

    this.countries = this.countryCityService.getCountries();
    this.filteredCountries = this.countries;

    this.subscriptionForm.get("country")?.valueChanges.subscribe(country => {
      const cityControl = this.subscriptionForm.get("city");

      if (country) {
        cityControl?.enable();
        const selectedCountry = this.countries.find(item => item.name === country);
        if (selectedCountry) {
          this.countryCityService.getCitiesByCountry(selectedCountry.isoCode).subscribe(cities => {
            this.cities = cities;
            this.filteredCities = cities;
          });
        }
      } else {
        cityControl?.disable();
      }
    });

    this.data$.subscribe(data => {
      if (data) {
        this.setInitialForm(data);
      }
    });
  }

  private setInitialForm(data: Subscription) {
    const values: Partial<Subscription> = {};

    this.fields.forEach(field => {
      const key = field.formControlName as keyof Subscription;

      if (key !== "genres" && key !== "agreement") {
        values[key] = data[key] ?? "";
      }
    });

    values.genres = data.genres || [];
    this.selectedGenres = [...(values.genres || [])];
    this.filteredGenres = this.genres.filter(genre => !this.selectedGenres.includes(genre));

    values.agreement = data.agreement ?? false;

    this.subscriptionForm.patchValue(values);
  }

  private onClickOutsideHandler(e: MouseEvent) {
    const isClickInsideGenresDropdown = this.genresDropdown?.nativeElement.contains(e.target);
    const isClickInsideCountryDropdown = this.countryDropdown?.nativeElement.contains(e.target);
    const isClickInsideCityDropdown = this.cityDropdown?.nativeElement.contains(e.target);
    const isClickInsideGenresInput = (e.target as HTMLElement).id === "genres";
    const isClickInsideCountryInput = (e.target as HTMLElement).id === "country";
    const isClickInsideCityInput = (e.target as HTMLElement).id === "city";
    const isClickInsideCountryButton = (e.target as HTMLElement).id === "subscription-country-button";
    const isClickInsideCityButton = (e.target as HTMLElement).id === "subscription-city-button";

    if (
      !isClickInsideGenresDropdown &&
      !isClickInsideCountryDropdown &&
      !isClickInsideCityDropdown &&
      !isClickInsideGenresInput &&
      !isClickInsideCountryInput &&
      !isClickInsideCityInput &&
      !isClickInsideCountryButton &&
      !isClickInsideCityButton
    ) {
      this.isGenresDropdownOpened = false;
      this.isCountryDropdownOpened = false;
      this.isCityDropdownOpened = false;
    }
  }

  private addAdditionalControls() {
    this.subscriptionForm.addControl("genres", this.formBuilder.control([], Validators.required));
    this.subscriptionForm.addControl("genre-query", this.formBuilder.control(""));
    this.subscriptionForm.addControl("agreement", this.formBuilder.control(false, Validators.requiredTrue));
  }

  onDropdownHandler(formControlName: string): void {
    const dropdowns: { [key: string]: () => void; } = {
      country: () => {
        this.isCountryDropdownOpened = true;
        this.isCityDropdownOpened = false;
        this.isGenresDropdownOpened = false;
      },
      city: () => {
        this.isCityDropdownOpened = true;
        this.isCountryDropdownOpened = false;
        this.isGenresDropdownOpened = false;
      },
      genres: () => {
        this.isGenresDropdownOpened = true;
        this.isCountryDropdownOpened = false;
        this.isCityDropdownOpened = false;
      },
    };

    this.isCountryDropdownOpened = false;
    this.isCityDropdownOpened = false;
    this.isGenresDropdownOpened = false;

    const dropdownAction = dropdowns[formControlName];
    if (dropdownAction) {
      dropdownAction();
    }
  }

  onClickHandler(formControlName: string, e: MouseEvent | KeyboardEvent) {
    const isMouseEvent = e instanceof MouseEvent;

    if (isMouseEvent) {
      e.stopPropagation();
    }

    this.onDropdownHandler(formControlName);
  }

  onSelectGenreHandler(genre: string) {
    this.selectedGenres = [...this.selectedGenres, genre];
    this.filteredGenres = this.genres.filter(item => !this.selectedGenres.includes(item));
    this.subscriptionForm.get("genres")?.setValue(this.selectedGenres);
  }

  onDeselectGenreHandler(genre: string) {
    this.filteredGenres = [...this.filteredGenres, genre];
    this.selectedGenres = this.selectedGenres.filter(item => item !== genre);
    this.subscriptionForm.get("genres")?.setValue(this.selectedGenres);
  }

  onSearchGenreHandler(e?: KeyboardEvent) {
    const genres = this.subscriptionForm.get("genre-query");
    const value = genres?.value.toLowerCase();

    this.filteredGenres = this.genres.filter(genre => genre.toLowerCase().includes(value));

    this.isGenresDropdownOpened = Boolean(this.filteredGenres.length);
    this.genreError = this.isGenresDropdownOpened ? null : "No matching genres found.";

    if (e && e.code === "Enter") {
      e.preventDefault();
      if (this.filteredGenres.length) {
        this.onSelectGenreHandler(this.filteredGenres[0]);
        genres?.setValue("");
      }
    }
  }

  onSelectCountryHandler(country: ICountry) {
    this.isCountryDropdownOpened = false;
    this.subscriptionForm.get("country")?.setValue(country.name);
    this.selectedCountry = country;
  }

  onSelectCityHandler(city: ICity) {
    this.isCityDropdownOpened = false;
    this.subscriptionForm.get("city")?.setValue(city.name);
    this.selectedCity = city;
  }

  onInputHandler(name: string): void {
    const input = this.subscriptionForm.get(name);
    const inputValue = input?.value.toLowerCase();

    if (name === "country") {
      this.filteredCountries = this.countries.filter(country =>
        country.name.toLowerCase().includes(inputValue)
      );
    }

    if (name === "city") {
      this.filteredCities = this.cities.filter(city =>
        city.name.toLowerCase().includes(inputValue)
      );
    }
  }

  onSubmitHandler() {
    this.subscriptionForm.markAllAsTouched();

    if (this.subscriptionForm.valid) {
      const values = { ...this.subscriptionForm.value };
      delete values["genre-query"];

      this.store.dispatch(setSubscriptionFields({ data: values }));

      this.subscriptionForm.reset();
      this.selectedGenres = [];
      this.filteredGenres = [...this.genres];
    }
  }

  getErrorMessage(name: string): string | null {
    const control = this.subscriptionForm.get(name);
    if (control && control.invalid && (control.dirty || control.touched)) {
      if (name === "agreement" && control.errors?.["required"]) {
        return "You must agree to the terms and conditions and privacy policy to continue";
      }
      if (name === "genres" && control.errors?.["required"]) {
        return "Please select at least one genre";
      }
      if (name === "email" && control.errors?.["pattern"]) {
        return "Please enter a valid email address";
      }

      if (control.errors?.["required"]) {
        return "This field is required";
      }
    }
    return null;
  }

  onQuestionWindowHandler() {
    this.showModal = !this.showModal;
  }

  onUnsubscribeHandler() {
    this.store.dispatch(subscriptionActions.unsubscribe());
  }

  ngOnDestroy() {
    document.removeEventListener("click", this.onClickOutsideHandler.bind(this));
  }
}
