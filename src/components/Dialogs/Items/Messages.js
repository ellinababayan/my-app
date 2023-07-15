import React from "react";

import classes from "./Messages.module.css";

const Messages = (props) => {
  return <div className={classes.item_m}>{props.message}</div>;
};

export default Messages;
