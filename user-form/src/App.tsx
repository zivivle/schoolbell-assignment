import * as S from "./App.styles";
import { Buttons, UserEditForm, UserList } from "./components";

function App() {
  return (
    <S.MainContainer>
      <UserEditForm />
      <Buttons />
      <UserList />
    </S.MainContainer>
  );
}

export default App;
