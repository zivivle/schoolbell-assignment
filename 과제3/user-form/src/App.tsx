import * as S from "./App.styles";
import { Buttons, UserEditForm, UserList } from "./components";
import { useMain } from "./hooks/useMain";

function App() {
  const { userInfo, userInfoList } = useMain();

  return (
    <S.MainContainer>
      <S.MainTitle>USER INFO FORM</S.MainTitle>
      {userInfo?.map((userData) => (
        <UserEditForm key={userData.id} userData={userData} />
      ))}
      <Buttons />
      {userInfoList ? <UserList /> : null}
    </S.MainContainer>
  );
}

export default App;
