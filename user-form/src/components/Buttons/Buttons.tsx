import { Button } from "@chakra-ui/react";
import * as S from "./Buttons.styles";

export const Buttons = () => {
  return (
    <S.ButtonsContainer>
      <Button>Add User</Button>
      <Button>Confirm</Button>
    </S.ButtonsContainer>
  );
};
