import { Heading } from "@chakra-ui/react";
import * as S from "./UserEditForm.styles";
import { PropsWithChildren } from "react";
import type { IUserEditForm } from "./UserEditForm.types";
import { ValidateInput } from "../ValidateInput/ValidateInput";
import { useUserEditForm } from "../../hooks/useUserEditForm";

export const UserEditForm = ({
  userData,
}: PropsWithChildren<IUserEditForm>) => {
  const { handleDeleteUserInfo, handleChangeUserInfo, isNameDuplicate } =
    useUserEditForm();

  return (
    <S.CardContainer align="center">
      <S.CardHeading>
        <Heading size="md">User - {userData.id}</Heading>
        <S.CardCloseButton
          onClick={() => {
            handleDeleteUserInfo(userData.id);
          }}
        />
      </S.CardHeading>
      <S.CardBodyContainer>
        <S.ValidateInputContainer>
          <ValidateInput
            label="Name"
            type="text"
            name={`name-${userData.id}`}
            onChange={(e) => handleChangeUserInfo(e, userData.id)}
            isNameDuplicate={isNameDuplicate(userData.name, userData.id)}
            fieldValid={userData.nameValid}
          />
          <ValidateInput
            label="Password"
            type="password"
            name={`password-${userData.id}`}
            onChange={(e) => handleChangeUserInfo(e, userData.id)}
            isNameDuplicate={false}
            fieldValid={userData.passwordValid}
          />
        </S.ValidateInputContainer>
      </S.CardBodyContainer>
    </S.CardContainer>
  );
};
