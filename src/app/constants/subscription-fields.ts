import { Input } from "@models/input.model";

export const subscriptionFields: Input[] = [
  { id: "first-name", for: "first-name", label: "First name", type: "text", formControlName: "firstName",
    placeholder: "Jane", required: true },
  { id: "last-name", for: "last-name", label: "Last name", type: "text", formControlName: "lastName",
    placeholder: "Doe", required: false },
  { id: "email", for: "email", label: "Email address", type: "email", formControlName: "email",
    placeholder: "jane@doe.com", required: true },
  { id: "country", for: "country", label: "State / Country", type: "text", formControlName: "country",
    placeholder: "Illinois", required: true },
  { id: "city", for: "city", label: "Town / City", type: "text", formControlName: "city",
    placeholder: "Chicago", required: false },
  { id: "address", for: "address", label: "Address", type: "text", formControlName: "address",
    placeholder: "155 North Michigan Avenue", required: true },
  { id: "zip", for: "zip", label: "Zip / Postal code", type: "text", formControlName: "zip",
    placeholder: "60601", required: true }
];
