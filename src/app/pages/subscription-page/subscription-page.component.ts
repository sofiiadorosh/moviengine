import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MovieItemComponent } from "@components/movie-item/movie-item.component";
import { genreIds } from "@constants/genre-ids";
import { subscriptionFields } from "@constants/subscription-fields";
import { DropdownComponent } from "@shared/dropdown/dropdown.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-subscription-page",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MovieItemComponent,
    SvgIconComponent,
    DropdownComponent
  ],
  templateUrl: "./subscription-page.component.html",
  styleUrls: ["./subscription-page.component.scss"]
})
export class SubscriptionPageComponent {
  protected readonly fields = subscriptionFields;
  protected readonly Object = Object;
  protected readonly genreIds = genreIds;

  subscriptionForm: FormGroup = this.formBuilder.group(
    this.fields.reduce((group, field) => {
      group[field.formControlName] = ["", Validators.required];
      return group;
    }, {} as { [key: string]: [string, Validators] })
  );
  constructor(private formBuilder: FormBuilder) {
    this.addAdditionalControls();
  }

  private addAdditionalControls(): void {
    this.subscriptionForm.addControl("genres", this.formBuilder.control("", Validators.required));
    this.subscriptionForm.addControl("agreement", this.formBuilder.control(false, Validators.requiredTrue));
  }

  onSubmitHandler() {
    console.log(this.subscriptionForm.value);
  }
}
