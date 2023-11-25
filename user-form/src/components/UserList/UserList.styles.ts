import styled from "@emotion/styled";

export const UserListTitleContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: start;
  margin-top: 20px;
  align-items: center;
`;

export const UserListTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-weight: 500;
  div {
    margin-right: 8px;
  }
`;

export const UserInfoListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #c3e2f7;
  border: 1px solid #e9e9e9;
  border-radius: 50px;
  div {
    margin-left: 10px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
