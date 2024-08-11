import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubscriptionSuccessComponent } from "./subscription-success.component";

describe("SubscriptionSuccessComponent", () => {
  let component: SubscriptionSuccessComponent;
  let fixture: ComponentFixture<SubscriptionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionSuccessComponent]
    })
      .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
