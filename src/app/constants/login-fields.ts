import { Input } from "@models/input.model";

export const loginFields: Input[] = [
  { id: "username", for: "username", label: "Username", type: "text", formControlName: "username",
    placeholder: " ", required: true, icon: "username", },
  { id: "password", for: "password", label: "Password", type: "password", formControlName: "password",
    placeholder: " ", required: true, icon: "password", },
];
