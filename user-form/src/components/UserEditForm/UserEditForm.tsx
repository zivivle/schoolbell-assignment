import { Heading } from "@chakra-ui/react";
import * as S from "./UserEditForm.styles";
import { PropsWithChildren } from "react";
import { userInfoAtom } from "../../store/UserForm.atoms";
import { useSetAtom } from "jotai";
import type { IUserEditForm } from "./UserEditForm.types";

export const UserEditForm = ({
  userData,
}: PropsWithChildren<IUserEditForm>) => {
  const setUserInfo = useSetAtom(userInfoAtom);

  const handleDeleteUserInfo = (id: number) => {
    setUserInfo((prev) => prev.filter((userInfo) => userInfo.id !== id));
  };

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
        <S.Label>Name</S.Label>
        <S.CardInput type="text" name={`name-${userData.id}`} />
        <S.Label>Password</S.Label>
        <S.CardInput type="password" name={`password-${userData.id}`} />
      </S.CardBodyContainer>
    </S.CardContainer>
  );
};
