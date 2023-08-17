import React from "react";
import LoadingImg from "./Loading.svg";
import classes from "./Loading.module.css"

let Loading = (props) => {
  return (
    // <div style={{ backgroundColor: "white"}}>
    <div className={classes.loading}>
      <img src={LoadingImg} className={classes.loadingImg} />
    </div>
  );
};

export default Loading;
