export interface Subscription {
  firstName: string,
  email: string,
  country: string,
  address: string,
  zip: string,
  genres: string[],
  agreement: boolean,
  lastName?: string,
  city?: string,
}
