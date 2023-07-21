import React from "react";
import classes from "./ProfileInfo.module.css";
import Loading from "../../base/Loading/Loading";
import ProfileStatus from "./ProfileStatus";
import styles from "../../base/Buttons.module.css";

const ProfileInfo = (props) => {
  // debugger;
  if (!props.profile) {
    return <Loading />;
  }
  // new
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  // new
  return (
    <div className={classes.background}>
      <div className={classes.feed}>
        <img
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : `https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=`
          }
          className={classes.profileImg}
          alt="profile_image"
        />
        <div>
          {/*
          // {props.profile.followed ? (
            <button
              disabled={props.followingInProgress.some(
                (id) => id === props.profile.userId
              )}
              onClick={() => {
                props.unfollowThunkCreator(props.profile.userId);
              }}
              className={styles.button}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some(
                (id) => id === props.profile.userId
              )}
              onClick={() => {
                props.followThunkCreator(props.profile.userId);
              }}
              className={styles.button}
            >
              Follow
            </button>
          )}
        ))}
        </div> */}

          {/* {props.users.map((u) => (
            <div key={props.profile.userId} className={styles.user}>
              <span>
                <div>
                  {u.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {
                        props.unfollowThunkCreator(u.id);
                      }}
                      className={styles.button}
                      key={u.id}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {
                        props.followThunkCreator(u.id);
                      }}
                      className={styles.button}
                      key={u.id}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
            </div>
          ))} */}
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        <div className={classes.profileDescription}>
          <div className={classes.fullName}>{props.profile.fullName}</div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div className={classes.states}>
            Looking For a Job:{" "}
            {props.profile.lookingForAJob !== false ? "Yes" : "No"}
          </div>
          <div className={classes.lookingForAJobDescription}>
            {props.profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
