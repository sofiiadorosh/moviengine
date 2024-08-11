import { AsyncPipe, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { Store} from "@ngrx/store";
import { ContainerComponent } from "@shared/container/container.component";
import { ErrorComponent } from "@shared/error/error.component";
import * as AuthActions from "@store/authentication/actions";
import { selectError, selectIsAuthorized, selectIsLoading } from "@store/authentication/selectors";
import { AppState } from "@store/index";
import { SvgIconComponent } from "angular-svg-icon";
import { Observable } from "rxjs";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [
    SvgIconComponent,
    ContainerComponent,
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    ErrorComponent
  ],
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent {
  isAuthorized$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>
  isQuickSignIn = false;
  loginForm = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });
  types: { [key: string]: string } = {
    username: "text",
    password: "password"
  };

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.isAuthorized$ = this.store.select(selectIsAuthorized);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  onSubmitHandler() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (username && password) {
        this.signIn({ username, password });
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onQuickSignInHandler() {
    this.isQuickSignIn = true;
    const credentials = {
      username: "sofidorosh",
      password: "5@53M?xeFuw9",
    }
    this.signIn(credentials);
  }

  signIn(credentials: { username: string, password: string }) {
    this.store.dispatch(AuthActions.requestToken(credentials));
    this.redirectToHome();
  }

  redirectToHome() {
    this.isAuthorized$.subscribe(isAuthorized => {
      if (isAuthorized) {
        this.router.navigate([RoutePaths.DEFAULT]);
      }
    });
  }
}
