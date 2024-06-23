import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WatchLaterPageComponent } from "./watch-later-page.component";

describe("WatchLaterPageComponent", () => {
  let component: WatchLaterPageComponent;
  let fixture: ComponentFixture<WatchLaterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchLaterPageComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(WatchLaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
