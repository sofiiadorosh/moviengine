import { Component } from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import { ContainerComponent } from "@shared/container/container.component";
import { SvgIconComponent } from "angular-svg-icon";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [
    SvgIconComponent,
    ContainerComponent,
    ReactiveFormsModule
  ],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss"
})
export class LoginPageComponent {
  loginForm = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}
  onSubmitHandler() {
    console.log(this.loginForm.value);
  }
}
