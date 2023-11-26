import { PropsWithChildren } from "react";
import * as S from "./ValisateInput.styles";
import type { IValidateInput } from "./ValidateInput.types";
import { determineErrorMessage } from "../../utils/determineErrorMessage";

export const ValidateInput = ({
  type,
  label,
  name,
  value,
  onChange,
  fieldValid,
  isNameDuplicate,
}: PropsWithChildren<IValidateInput>) => {
  const autoComplete = type === "password" ? "new-password" : "";
  const isInvalid = (type === "text" && isNameDuplicate) || !fieldValid;
  const isEmptyValue = !value && !fieldValid;

  const errorMessage = determineErrorMessage(
    type,
    isNameDuplicate,
    fieldValid,
    isEmptyValue,
    value
  );

  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.CardInput
        type={type}
        name={name}
        onChange={onChange}
        autoComplete={autoComplete}
        isInvalid={isInvalid}
      />

      {errorMessage && <S.ValidationError>{errorMessage}</S.ValidationError>}
    </div>
  );
};
