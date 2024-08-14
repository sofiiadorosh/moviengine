import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { CreateSessionIdResponse, RequestTokenResponse } from "@models/response.interface";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  getRequestToken(): Observable<RequestTokenResponse> {
    return this.httpClient.get<RequestTokenResponse>(`${environment.apiBaseUrl}/authentication/token/new`);
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
      body
    );
  }

  createSessionId(token: string): Observable<CreateSessionIdResponse> {
    const body = {
      request_token: token,
    };
    return this.httpClient.post<CreateSessionIdResponse>(`${environment.apiBaseUrl}/authentication/session/new`,
      body
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = "An unknown error occurred!";
    if (error.error instanceof ErrorEvent) {
      message = `Error: ${error.error.message}`;
    } else {
      message = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(message));
  }
}
