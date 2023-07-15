import React from "react";
import LoadingImg from "./Loading.svg";

let Loading = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={LoadingImg} />
    </div>
  );
};

export default Loading;
