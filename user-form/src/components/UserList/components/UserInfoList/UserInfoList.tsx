import { PropsWithChildren } from "react";
import * as S from "./UserInfoList.styles";
import { IUserEditForm } from "../../../UserEditForm/UserEditForm.types";

export const UserInfoList = ({
  userData,
}: PropsWithChildren<IUserEditForm>) => {
  const emptyUserInfo = <div>등록된 User 정보가 없습니다.</div>;

  if (userData.name === "" || userData.password === "") {
    return emptyUserInfo;
  }
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
