import React from "react";
import classes from "./ProfileInfo.module.css";
import Loading from "../../base/Loading/Loading";
import { Navigate } from "react-router-dom";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loading />;
  }
  // if (props.isAuth === false) {
  //   return (<Navigate to={`/login`} />)
  // }
  return (
    <div>
      <div className={classes.feed}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5898b55020099e1b6fc9d890/1649611291486-WCA8AV69UWCW2ZOM6UBI/unsplash-image-prMn9KINLtI.jpg"
          alt=""
        />
      </div>
      <img
        src={
          props.profile.photos.large
            ? props.profile.photos.large
            : `https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=`
        }
        className={classes.profileImg}
        alt=""
      />
      <div className={classes.name}>
        {/* ava + description */}
        <div>{props.profile.fullName}</div>
        <div>
          Looking For a Job:{" "}
          {props.profile.lookingForAJob !== false
            ? props.profile.lookingForAJob
            : false}
        </div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
