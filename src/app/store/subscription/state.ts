import { Subscription } from "@models/subscription.interface";

export interface SubscriptionState {
  data: Subscription,
  isSubscribed: boolean,
}

export const initialState: SubscriptionState = {
  data: {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    address: "",
    zip: "",
    genres: [],
    agreement: false,
  },
  isSubscribed: false,
}
