import "./App.css";
import { Buttons, UserEditForm, UserList } from "./components";

function App() {
  return (
    <div className="App">
      <div>USER FORM!</div>
      <UserEditForm />
      <Buttons />
      <UserList />
    </div>
  );
}

export default App;
