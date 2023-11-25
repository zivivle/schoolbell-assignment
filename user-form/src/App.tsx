import * as S from "./App.styles";
import { Buttons, UserEditForm, UserList } from "./components";
import { useAtomValue } from "jotai";
import { userInfoAtom, userInfoShow } from "./store/UserForm.atoms";

function App() {
  const userInfo = useAtomValue(userInfoAtom);
  const userInfoList = useAtomValue(userInfoShow);

  return (
    <S.MainContainer>
      {userInfo?.map((userData) => (
        <UserEditForm key={userData.id} userData={userData} />
      ))}
      <Buttons />
      {userInfoList ? <UserList /> : null}
    </S.MainContainer>
  );
}

export default App;
