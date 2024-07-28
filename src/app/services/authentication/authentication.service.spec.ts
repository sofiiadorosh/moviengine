import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { environment } from "@environments/environment";
import { CreateSessionIdResponse, RequestTokenResponse } from "@models/response.interface";

import { AuthenticationService } from "./authentication.service";

describe("AuthenticationService", () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    });

    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get request token", () => {
    const dummyTokenResponse: RequestTokenResponse = {
      success: true,
      expires_at: "2024-12-31",
      request_token: "dummy_token"
    };

    service.getRequestToken().subscribe(response => {
      expect(response).toEqual(dummyTokenResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyTokenResponse);
  });

  it("should ask for permission", () => {
    const dummyTokenResponse: RequestTokenResponse = {
      success: true,
      expires_at: "2024-12-31",
      request_token: "dummy_token"
    };

    service.askForPermission("dummy_token").subscribe(response => {
      expect(response).toEqual(dummyTokenResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/authentication/token/validate_with_login?api_key=${environment.apiKey}`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual({
      username: "sofidorosh",
      password: "Thesadness86",
      request_token: "dummy_token"
    });
    req.flush(dummyTokenResponse);
  });

  it("should create session id", () => {
    const dummySessionResponse: CreateSessionIdResponse = {
      success: true,
      session_id: "dummy_session_id"
    };

    service.createSessionId("dummy_token").subscribe(response => {
      expect(response).toEqual(dummySessionResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`);
    expect(req.request.method).toBe("POST");
    expect(req.request.body).toEqual({
      request_token: "dummy_token"
    });
    req.flush(dummySessionResponse);
  });
});
