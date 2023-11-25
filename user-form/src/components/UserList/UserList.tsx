import { InfoOutlineIcon } from "@chakra-ui/icons";
import * as S from "./UserList.styles";
import { UserInfoList } from "./components";
import { Tooltip } from "@chakra-ui/react";

export const UserList = () => {
  return (
    <div>
      <S.UserListTitleContainer>
        <S.UserListTitle>
          <div>User Info</div>
          <Tooltip label="등록된 유저 정보 리스트입니다.">
            <InfoOutlineIcon />
          </Tooltip>
        </S.UserListTitle>
      </S.UserListTitleContainer>
      <S.UserInfoListContainer>
        <S.UserInfoWrapper>
          <UserInfoList />
        </S.UserInfoWrapper>
      </S.UserInfoListContainer>
    </div>
  );
};
