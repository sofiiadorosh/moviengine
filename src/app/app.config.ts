import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { authInterceptor } from "@interceptors/auth.interceptor";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { appEffects, appStore } from "@store/index";
import { provideAngularSvgIcon } from "angular-svg-icon";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAngularSvgIcon(),
    provideStore(appStore),
    provideEffects(appEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ],
};
