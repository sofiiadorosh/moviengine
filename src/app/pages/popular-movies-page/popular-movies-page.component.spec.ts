import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PopularMoviesPageComponent } from "./popular-movies-page.component";

describe("PopularMoviesPageComponent", () => {
  let component: PopularMoviesPageComponent;
  let fixture: ComponentFixture<PopularMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularMoviesPageComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(PopularMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
