import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { loginRedirectGuard } from "./login-redirect.guard";

describe("loginRedirectGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
    TestBed.runInInjectionContext(() => loginRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
