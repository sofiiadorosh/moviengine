import { HttpErrorResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { movies } from "@constants/movies";
import { environment } from "@environments/environment";
import { StoreModule } from "@ngrx/store";

import { MovieService } from "./movie.service";

describe("MovieService", () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [MovieService]
    });

    injector = getTestBed();
    service = injector.inject(MovieService);
    httpTestingController = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return popular movies", (done) => {
    const mockMovies = { results: movies };

    service.getPopularMovies().subscribe((data) => {
      expect(data).toEqual(mockMovies.results);
      done();
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}`
    );
    expect(req.request.method).toEqual("GET");
    req.flush(mockMovies);
  });

  it("should handle error when fetching popular movies", (done) => {
    service.getPopularMovies().subscribe({
      next: (data) => {
        expect(data).toEqual([]);
        done();
      },
      error: (error: HttpErrorResponse) => {
        expect(error).toBeTruthy();
        expect(error.status).toEqual(500);
        expect(error.statusText).toEqual("Server Error");
        done();
      }
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/movie/popular?api_key=${environment.apiKey}`
    );
    req.flush(null, { status: 500, statusText: "Server Error" });
  });
});
