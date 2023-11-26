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
  return (
    <S.ValidateInputContainer>
      <S.Label>{label}</S.Label>
      <S.CardInput
        type={type}
        name={name}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {isNameDuplicate && type === "text" && <div>중복된 이름이 있습니다.</div>}
      {!fieldValid && type === "text" && <div>3자 이상 입력해주세요.</div>}
      {!fieldValid && type === "password" && <div>6자 이상 입력해주세요.</div>}
    </S.ValidateInputContainer>
  );
};
