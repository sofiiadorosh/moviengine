import { Input } from "@models/input.model";

export const subscriptionFields: Input[] = [
  { id: "first-name", for: "first-name", label: "First name", type: "text", formControlName: "firstName",
    placeholder: "Jane" },
  { id: "last-name", for: "last-name", label: "Last name", type: "text", formControlName: "lastName",
    placeholder: "Doe" },
  { id: "email", for: "email", label: "Email address", type: "email", formControlName: "email",
    placeholder: "jane@doe.com" },
  { id: "country", for: "country", label: "State / Country", type: "text", formControlName: "country",
    placeholder: "Illinois" },
  { id: "city", for: "city", label: "Town / City", type: "text", formControlName: "city",
    placeholder: "Chicago" },
  { id: "address", for: "address", label: "Address", type: "text", formControlName: "address",
    placeholder: "155 North Michigan Avenue" },
  { id: "zip", for: "zip", label: "Zip / Postal code", type: "text", formControlName: "zip",
    placeholder: "60601" }
];
