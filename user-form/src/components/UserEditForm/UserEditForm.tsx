import { Heading } from "@chakra-ui/react";
import * as S from "./UserEditForm.styles";

export const UserEditForm = () => {
  return (
    <S.CardContainer align="center">
      <S.CardHeading>
        <Heading size="md">User - NUMBER</Heading>
        <S.CardCloseButton />
      </S.CardHeading>
      <S.CardBodyContainer>
        <S.Label>Name</S.Label>
        <S.CardInput type="text" name="name" />
        <S.Label>Password</S.Label>
        <S.CardInput type="password" name="password" />
      </S.CardBodyContainer>
    </S.CardContainer>
  );
};
