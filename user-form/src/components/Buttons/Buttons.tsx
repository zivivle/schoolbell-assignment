import { Button } from "@chakra-ui/react";
import * as S from "./Buttons.styles";
import { useSetAtom } from "jotai";
import { userInfoAtom, userInfoShow } from "../../store/UserForm.atoms";

export const Buttons = () => {
  const setUserInfo = useSetAtom(userInfoAtom);
  const setUserInfoList = useSetAtom(userInfoShow);

  const handleAddUserForm = () => {
    setUserInfo((prev) => [
      ...prev,
      {
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        name: "",
        password: "",
      },
    ]);
  };

  const handleShowUserInfoList = () => {
    setUserInfoList(true);
  };

  return (
    <S.ButtonsContainer>
      <Button onClick={handleAddUserForm}>Add User</Button>
      <Button onClick={handleShowUserInfoList}>Confirm</Button>
    </S.ButtonsContainer>
  );
};
