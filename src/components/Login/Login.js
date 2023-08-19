import React, { useState } from "react";
import classes from "./Login.module.css";
import loginUser from "../../redux/services/login.service";
import logoutUser from "../../redux/services/logout.service";
import { useNavigate } from "react-router";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";

const Login = (props) => {
  const togglePassword = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    // localStorage.getItem("token") !== null
    false
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (values, actions) => {
    try {
      const loginResult = await loginUser(values, navigate);
      if (loginResult) {
        setIsLoggedIn(true);
        navigate("/profile");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    actions.setSubmitting(false);
  };

  const handleLogout = () => {
    logoutUser();
    // localStorage.clear()
    setIsLoggedIn(false);
    navigate("/users");
  };

  return (
    <div className={classes.login} onSubmit={props.handleSubmit}>
      {/* {isLoggedIn ? (
        <LogoutForm handleLogout={handleLogout} />
      ) : ( */}
        <LoginForm
          togglePassword={togglePassword}
          errorMessage={errorMessage}
          handleLogin={handleLogin}
        />
      {/* )} */}
    </div>
  );
};

export default Login;
