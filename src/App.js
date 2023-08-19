import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LogoutForm from "./components/Login/LogoutForm";
import LoginForm from "./components/Login/LoginForm";

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
          <Route path="/login" element={<Login />}>
            {/* <Route path="/logout" element={<LogoutForm />} />
            <Route path="/login" element={<LoginForm />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
