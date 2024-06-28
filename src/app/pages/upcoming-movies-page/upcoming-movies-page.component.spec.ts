import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UpcomingMoviesPageComponent } from "./upcoming-movies-page.component";

describe("UpcomingMoviesPageComponent", () => {
  let component: UpcomingMoviesPageComponent;
  let fixture: ComponentFixture<UpcomingMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMoviesPageComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
