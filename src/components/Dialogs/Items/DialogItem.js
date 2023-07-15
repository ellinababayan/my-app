import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItems.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.padding}>
      <img className={classes.profile_img} src={props.src} />
      <NavLink
        to={"/dialogs/" + props.id}
        className={(navData) =>
          navData.isActive ? classes.active : classes.item_d
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
