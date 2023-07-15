import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
