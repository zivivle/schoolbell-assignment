import { Button } from "@chakra-ui/react";
import * as S from "./Buttons.styles";
import { useAtom, useSetAtom } from "jotai";
import {
  userInfoAtom,
  tempUserInfoAtom,
  userInfoShow,
} from "../../store/UserForm.atoms";

export const Buttons = () => {
  const [tempUserInfo, setTempUserInfo] = useAtom(tempUserInfoAtom);
  const setUserInfo = useSetAtom(userInfoAtom);
  const setUserInfoList = useSetAtom(userInfoShow);

  const handleAddUserForm = () => {
    setTempUserInfo((prev) => [
      ...prev,
      {
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        name: "",
        password: "",
      },
    ]);
  };

  const handleConfirm = () => {
    setUserInfoList(true);
    setUserInfo(tempUserInfo);
  };

  return (
    <S.ButtonsContainer>
      <Button onClick={handleAddUserForm}>Add User</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
    </S.ButtonsContainer>
  );
};
