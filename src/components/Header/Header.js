import React from "react";
import classes from "./Header.module.css";
import { BrowserRouter, NavLink, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://i.pinimg.com/originals/01/e8/02/01e80267f63bce9fcae94e29bf3acfd3.jpg"
        alt=""
      />
      <h1>Sea Social</h1>
      <div className={classes.login}>
        {props.isAuth ? (
          <div>
            {props.login} &nbsp;{" "}
            <BrowserRouter>
              <NavLink to={"/login"} className={classes.visited}>
                Log Out
              </NavLink>
            </BrowserRouter>
          </div>
        ) : (
          <BrowserRouter>
            <NavLink to={"/login"} className={classes.visited}>
              Sign In
            </NavLink>
          </BrowserRouter>
        )}
      </div>

    </header>
  );
};

export default Header;
