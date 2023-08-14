import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navItem}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          {" "}
          <i className="fa fa-home" aria-hidden="true"></i>
          Profile
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/dialogs"
        >
          <i className="fa fa-message" aria-hidden="true"></i>
          Messages
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/users"
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          Users
        </NavLink>
      </div>
      <div className={classes.navItem}>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/news"
        >
          <i className="fa fa-newspaper" aria-hidden="true"></i>
          News
        </NavLink>
      </div>
      <div className={classes.navItem}>
        
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/settings"
        >
          <i className="fa fa-cog"></i>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
