import { ChangeEvent } from "react";
import { tempUserInfoAtom } from "../store/UserForm.atoms";
import { isNameDuplicated } from "../utils/isNameDuplicated";
import { useAtom } from "jotai";

export const useUserEditForm = () => {
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

  return {
    handleDeleteUserInfo,
    handleChangeUserInfo,
    isNameDuplicate,
  };
};
