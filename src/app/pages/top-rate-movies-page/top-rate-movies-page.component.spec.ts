import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TopRateMoviesPageComponent } from "./top-rate-movies-page.component";

describe("TopRateMoviesPageComponent", () => {
  let component: TopRateMoviesPageComponent;
  let fixture: ComponentFixture<TopRateMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRateMoviesPageComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(TopRateMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
