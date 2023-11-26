import { ChangeEvent } from "react";

export interface IValidateInput {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isNameDuplicate: boolean;
  fieldValid: boolean;
}
