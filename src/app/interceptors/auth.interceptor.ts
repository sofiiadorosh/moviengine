import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { environment } from "@environments/environment";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = environment.token;

  const modifiedRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(modifiedRequest).pipe(
    catchError((error: unknown) => {
      let message = "An unknown error occurred!";

      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          message = error.error?.status_message || "Unauthorized access. Please check your credentials.";
          // Optionally, you can trigger a re-authentication flow or redirect the user here
        } else {
          message = error.error?.status_message || error.message ||
            "An error occurred while processing your request.";
        }
      } else {
        // Handle non-HTTP errors
      }

      // Re-throw the error with the message
      return throwError(() => new Error(message));
    })
  );
};
