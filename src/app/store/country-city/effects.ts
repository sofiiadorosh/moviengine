import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CountryCityService } from "@services/country-city/country-city.service";
import { AppState } from "@store/index";
import { of, take } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { citiesActions, countriesActions, setCountry } from "./actions";
import { selectCountry } from "./selectors";

@Injectable()
export class CountryCityEffects {
  constructor(
    private actions$: Actions,
    private countryCityService: CountryCityService,
    private store: Store<AppState>
  ) {}

  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countriesActions.load),
      switchMap(() =>
        this.countryCityService.getCountries().pipe(
          map(countries => countriesActions.loadSuccess({ items: countries })),
          catchError(error => of(countriesActions.loadFailure({ error })))
        )
      )
    )
  });

  loadCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setCountry),
      switchMap(() => {
        return this.store.select(selectCountry).pipe(
          take(1),
          switchMap(country => {
            if (!country) {
              return of(citiesActions.loadFailure({ error: "No country selected" }));
            }

            return this.countryCityService.getCitiesByCountry(country.iso2).pipe(
              map(cities => citiesActions.loadSuccess({ items: cities })),
              catchError(error => of(citiesActions.loadFailure({ error })))
            );
          })
        );
      })
    );
  });

}
