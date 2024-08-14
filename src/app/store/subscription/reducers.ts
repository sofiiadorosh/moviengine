import { createReducer, on } from "@ngrx/store";
import {initialState, SubscriptionState} from "@store/subscription/state";

import * as subscriptionActions from "./actions";

export const subscriptionReducer = createReducer(
  initialState,
  on(subscriptionActions.setSubscriptionFields, (state, { data }): SubscriptionState => ({
    ...state, data, isSubscribed: true,
  })),
  on(subscriptionActions.unsubscribe, (state): SubscriptionState => ({
    ...state, isSubscribed: false,
  }))
)
