import { AsyncPipe } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RoutePaths } from "@models/route-paths.enum";
import { Subscription } from "@models/subscription.interface";
import { Store } from "@ngrx/store";
import { AppState } from "@store/index";
import { selectData } from "@store/subscription/selectors";
import { Observable } from "rxjs";

@Component({
  selector: "app-subscription-success",
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: "./subscription-success.component.html",
  styleUrl: "./subscription-success.component.scss"
})
export class SubscriptionSuccessComponent {
  @Output() unsubscribe = new EventEmitter<void>;
  data$: Observable<Subscription>;
  popularRoute = `/${RoutePaths.POPULAR}`;

  constructor(private store: Store<AppState>) {
    this.data$ = this.store.select(selectData);
  }

  onUnsubscribeHandler() {
    this.unsubscribe.emit();
  }

  protected readonly RouterLink = RouterLink;
}
