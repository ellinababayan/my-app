import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        //new
        // followThunkCreator={props.followThunkCreator}
        // unfollowThunkCreator={props.unfollowThunkCreator}
        // followingInProgress={props.followingInProgress}
        // users={props.users}
        // totalUsersCount={props.totalUsersCount}
        //new
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;