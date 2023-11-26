import { ChangeEvent } from "react";

export interface IValidateInput {
  type: string;
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isNameDuplicate: boolean;
  fieldValid: boolean;
}
