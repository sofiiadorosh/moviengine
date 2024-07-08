import {Component, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "@components/header/header.component";
import {SidebarComponent} from "@components/sidebar/sidebar.component";
import {AuthenticationService} from "@services/authentication/authentication.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.generateSessionId();
  }

  generateSessionId() {
    this.requestToken();
  }

  requestToken() {
    this.authenticationService.getRequestToken().subscribe({
      next: (response) => {
        const token = response.request_token;
        this.authenticationService.setToken(token);
        this.askForPermission(token);
      },
      error: (error) => {
        console.error("Error requesting token:", error);
      }
    });
  }

  askForPermission(token: string) {
    this.authenticationService.askForPermission(token).subscribe({
      next: () => {
        this.createSessionId(token);
      },
      error: (error) => {
        console.error("Error asking for permission:", error);
      }
    });
  }

  createSessionId(token: string) {
    this.authenticationService.createSessionId(token).subscribe({
      next: (response) => {
        const sessionId = response.session_id;
        this.authenticationService.setSessionId(sessionId);
      },
      error: (error) => {
        console.error("Error creating session ID:", error);
      }
    });
  }
}
