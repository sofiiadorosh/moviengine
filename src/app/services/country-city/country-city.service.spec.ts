import { TestBed } from "@angular/core/testing";

import { CountryCityService } from "./country-city.service";

describe("CountryCityService", () => {
  let service: CountryCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryCityService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
