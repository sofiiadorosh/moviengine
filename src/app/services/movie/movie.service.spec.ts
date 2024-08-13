import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { MovieService } from "./movie.service";

describe("MovieService", () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({}),
      ],
    });
    service = TestBed.inject(MovieService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
