import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="*" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route exact path="/dialogs" element={<DialogsContainer />} />
          <Route exact path="/users" element={<UsersContainer />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
