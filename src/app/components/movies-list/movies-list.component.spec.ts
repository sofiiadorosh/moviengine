import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MoviesListComponent } from "./movies-list.component";

describe("MoviesListComponent", () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MoviesListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
