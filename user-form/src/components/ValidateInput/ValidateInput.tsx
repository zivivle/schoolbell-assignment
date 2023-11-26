import { PropsWithChildren } from "react";
import * as S from "./ValisateInput.styles";
import type { IValidateInput } from "./ValidateInput.types";

export const ValidateInput = ({
  type,
  label,
  name,
  onChange,
  fieldValid,
  isNameDuplicate,
}: PropsWithChildren<IValidateInput>) => {
  const autoComplete = type === "password" ? "new-password" : "";
  const isInvalid = (type === "text" && isNameDuplicate) || !fieldValid;
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
      {isNameDuplicate && type === "text" && (
        <S.ValidationError>중복된 이름이 있습니다.</S.ValidationError>
      )}
      {!fieldValid && type === "text" && (
        <S.ValidationError>3자 이상 입력해주세요.</S.ValidationError>
      )}
      {!fieldValid && type === "password" && (
        <S.ValidationError>6자 이상 입력해주세요.</S.ValidationError>
      )}
    </div>
  );
};
