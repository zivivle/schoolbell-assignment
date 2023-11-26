import { Button } from "@chakra-ui/react";
import * as S from "./Buttons.styles";
import { useAtom, useSetAtom } from "jotai";
import {
  userInfoAtom,
  tempUserInfoAtom,
  userInfoShow,
} from "../../store/UserForm.atoms";
import { isNameDuplicated } from "../../utils/isNameDuplicated";

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
        nameValid: true,
        passwordValid: true,
      },
    ]);
  };

  const handleConfirm = () => {
    const hasDuplicatedNames = tempUserInfo.some((user) =>
      isNameDuplicated(tempUserInfo, user)
    );
    const allValid = tempUserInfo.every(
      (user) => user.nameValid && user.passwordValid
    );
    if (allValid && !hasDuplicatedNames) {
      const maskedUserInfo = tempUserInfo.map((user) => ({
        ...user,
        password:
          user.password.length > 3
            ? user.password.substring(0, 3) +
              "🩵".repeat(user.password.length - 3)
            : "🩵".repeat(user.password.length),
      }));
      setUserInfoList(true);
      setUserInfo(maskedUserInfo);
    }
  };

  const isButtonDisabled = tempUserInfo.some(
    (user) =>
      !user.nameValid ||
      !user.passwordValid ||
      isNameDuplicated(tempUserInfo, user)
  );

  return (
    <S.ButtonsContainer>
      <Button onClick={handleAddUserForm}>Add User</Button>
      <Button onClick={handleConfirm} isDisabled={isButtonDisabled}>
        Confirm
      </Button>
    </S.ButtonsContainer>
  );
};
