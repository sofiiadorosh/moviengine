import { Injectable } from "@angular/core";
import { City, Country, ICity } from "country-state-city";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountryCityService {

  getCountries() {
    return Country.getAllCountries();
  }

  getCitiesByCountry(code: string): Observable<ICity[]> {
    const cities = City.getCitiesOfCountry(code);
    return of(cities ?? []);
  }

}
