import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NowPlayingMoviesPageComponent } from "./now-playing-movies-page.component";

describe("NowPlayingMoviesPageComponent", () => {
  let component: NowPlayingMoviesPageComponent;
  let fixture: ComponentFixture<NowPlayingMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlayingMoviesPageComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(NowPlayingMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
