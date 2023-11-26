import { Button } from "@chakra-ui/react";
import * as S from "./Buttons.styles";

import { useButtons } from "../../hooks/useButtons";

export const Buttons = () => {
  const { handleAddUserForm, handleConfirm, isButtonDisabled } = useButtons();

  return (
    <S.ButtonsContainer>
      <Button onClick={handleAddUserForm}>Add User</Button>
      <Button onClick={handleConfirm} isDisabled={isButtonDisabled}>
        Confirm
      </Button>
    </S.ButtonsContainer>
  );
};
