import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { CreateSessionIdResponse, RequestTokenResponse } from "@models/response.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  private getOptions() {
    return { params: new HttpParams().set("api_key", environment.apiKey) };
  }

  getRequestToken(): Observable<RequestTokenResponse> {
    return this.httpClient.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new`,
      this.getOptions());
  }

  askForPermission(credentials: { username: string, password: string, token: string }):
  Observable<RequestTokenResponse> {
    const { username, password, token } = credentials;
    const body = {
      username,
      password,
      request_token: token,
    };
    return this.httpClient.post<RequestTokenResponse>(
      `${environment.apiBaseUrl}/authentication/token/validate_with_login`,
      body,
      this.getOptions()
    );
  }

  createSessionId(token: string): Observable<CreateSessionIdResponse> {
    const body = {
      request_token: token,
    };
    return this.httpClient.post<CreateSessionIdResponse>(`${environment.apiBaseUrl}/authentication/session/new`,
      body,
      this.getOptions());
  }
}
