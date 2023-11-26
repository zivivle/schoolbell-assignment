import { Heading } from "@chakra-ui/react";
import * as S from "./UserEditForm.styles";
import { ChangeEvent, PropsWithChildren } from "react";
import { tempUserInfoAtom } from "../../store/UserForm.atoms";
import { useSetAtom } from "jotai";
import type { IUserEditForm } from "./UserEditForm.types";

export const UserEditForm = ({
  userData,
}: PropsWithChildren<IUserEditForm>) => {
  const setUserInfo = useSetAtom(tempUserInfoAtom);

  const handleDeleteUserInfo = (id: number) => {
    setUserInfo((prev) => prev.filter((userInfo) => userInfo.id !== id));
  };

  const handleChangeUserInfo = (
    e: ChangeEvent<HTMLInputElement>,
    currentUserId: number
  ) => {
    const { name, value } = e.target;
    const [fieldName, fieldUserId] = name.split("-");

    const fieldId = parseInt(fieldUserId, 10);

    if (fieldId === currentUserId) {
      setUserInfo((prev) => {
        const userIndex = prev.findIndex((user) => user.id === fieldId);
        const updatedUsers = [...prev];
        if (userIndex >= 0) {
          updatedUsers[userIndex] = {
            ...updatedUsers[userIndex],
            [fieldName]: value,
          };
        } else {
          const newUser = {
            id: fieldId,
            name: "",
            password: "",
            [fieldName]: value,
          };
          updatedUsers.push(newUser);
        }
        return updatedUsers;
      });
    }
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
        <S.CardInput
          type="text"
          name={`name-${userData.id}`}
          onChange={(e) => {
            handleChangeUserInfo(e, userData.id);
          }}
        />
        <S.Label>Password</S.Label>
        <S.CardInput
          type="password"
          name={`password-${userData.id}`}
          onChange={(e) => {
            handleChangeUserInfo(e, userData.id);
          }}
        />
      </S.CardBodyContainer>
    </S.CardContainer>
  );
};
