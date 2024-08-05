import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { isAuthorizedGuard } from "./is-authorized.guard";

describe("isAuthorizedGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => isAuthorizedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
