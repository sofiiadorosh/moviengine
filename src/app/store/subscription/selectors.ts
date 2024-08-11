import { createSelector} from "@ngrx/store";
import { AppState } from "@store/index";
import { SubscriptionState } from "@store/subscription/state";

export const subscriptionState = (state: AppState) => state.subscription;

export const selectData = createSelector(
  subscriptionState,
  (state: SubscriptionState) => state.data
)

export const selectIsSubscribed = createSelector(
  subscriptionState,
  (state: SubscriptionState) => state.isSubscribed
)
