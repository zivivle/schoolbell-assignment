import { PropsWithChildren } from "react";
import * as S from "./UserInfoList.styles";
import { IUserEditForm } from "../../../UserEditForm/UserEditForm.types";

export const UserInfoList = ({
  userData,
}: PropsWithChildren<IUserEditForm>) => {
  return (
    <S.InfoContainer>
      <S.InfoSection>
        Name:<p>{userData.name}</p>
      </S.InfoSection>
      <S.InfoSection>
        Password:<p>{userData.password}</p>
      </S.InfoSection>
    </S.InfoContainer>
  );
};
