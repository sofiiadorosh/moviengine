import { Subscription } from "@models/subscription.interface";
import { createAction, props } from "@ngrx/store";
import { subscriptionActionTypes } from "@store/subscription/action-types";

export const setSubscriptionFields = createAction(
  subscriptionActionTypes.SET_SUBSCRIPTION_FIELDS,
  props<{ data: Subscription }>()
)

export const unsubscribe = createAction(
  subscriptionActionTypes.UNSUBSCRIBE,
)
