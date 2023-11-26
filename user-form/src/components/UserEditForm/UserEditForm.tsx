import { Heading } from "@chakra-ui/react";
import * as S from "./UserEditForm.styles";
import { ChangeEvent, PropsWithChildren } from "react";
import { tempUserInfoAtom } from "../../store/UserForm.atoms";
import { useAtom } from "jotai";
import type { IUserEditForm } from "./UserEditForm.types";
import { ValidateInput } from "../ValidateInput/ValidateInput";
import { isNameDuplicated } from "../../utils/isNameDuplicated";

export const UserEditForm = ({
  userData,
}: PropsWithChildren<IUserEditForm>) => {
  const [tempUserInfo, setTempUserInfo] = useAtom(tempUserInfoAtom);

  const handleDeleteUserInfo = (id: number) => {
    setTempUserInfo((prev) => prev.filter((userInfo) => userInfo.id !== id));
  };

  const handleChangeUserInfo = (
    e: ChangeEvent<HTMLInputElement>,
    currentUserId: number
  ) => {
    const { name, value } = e.target;
    const [fieldName, fieldUserId] = name.split("-");

    const fieldId = parseInt(fieldUserId, 10);

    if (fieldId === currentUserId) {
      setTempUserInfo((prev) => {
        const userIndex = prev.findIndex((user) => user.id === fieldId);
        const updatedUsers = [...prev];
        if (userIndex >= 0) {
          const fieldValid =
            fieldName === "name" ? value.length >= 3 : value.length >= 6;
          updatedUsers[userIndex] = {
            ...updatedUsers[userIndex],
            [fieldName]: value,
            [`${fieldName}Valid`]: fieldValid,
          };
        } else {
          const newUser = {
            id: fieldId,
            name: "",
            password: "",
            nameValid: true,
            passwordValid: true,
            [fieldName]: value,
          };
          updatedUsers.push(newUser);
        }
        return updatedUsers;
      });
    }
  };

  const isNameDuplicate = (name: string, id: number) => {
    if (name === "") {
      return false;
    }
    return isNameDuplicated(tempUserInfo, { name, id });
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
      </S.CardBodyContainer>
    </S.CardContainer>
  );
};
