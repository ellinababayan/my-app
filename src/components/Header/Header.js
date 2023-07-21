import React from "react";
import classes from "./Header.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://i.pinimg.com/originals/01/e8/02/01e80267f63bce9fcae94e29bf3acfd3.jpg"
        alt=""
      />
      <h1>Sea Social</h1>
      <div className={classes.login}>
        {props.isAuth ? props.login : 
          <BrowserRouter>
            <NavLink to={"/login"} className={classes.visited}>Sign In</NavLink>
          </BrowserRouter>
        }
      </div>
    </header>
  );
};

export default Header;
