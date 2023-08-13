import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import classes from "../base/Buttons.module.css";

const Users = (props) => {
  const { totalUsersCount, pageSize, currentPage, onPageChanged, users } =
    props;

  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const visiblePagesRange = 10;
  const pageRangeStart = Math.max(currentPage - 5, 1);
  const pageRangeEnd = Math.min(
    pageRangeStart + visiblePagesRange - 1,
    pagesCount
  );

  const limitedPages = Array.from(
    { length: pageRangeEnd - pageRangeStart + 1 },
    (_, i) => pageRangeStart + i
  );

  return (
    <div className={styles.usersPage}>
      <div className={styles.choosePage}>
        {currentPage > 1 && (
          <span onClick={() => onPageChanged(currentPage - 1)}>
            &lt; Previous &nbsp;
          </span>
        )}
        {Array.from(
          { length: props.pageRangeEnd - props.pageRangeStart + 1 },
          (_, i) => props.pageRangeStart + i
        ).map((page) => (
          <span
            key={page}
            className={currentPage === page ? styles.selectedPage : ""}
            onClick={() => onPageChanged(page)}
          >
            &nbsp;{page}&nbsp;
          </span>
        ))}
        {currentPage < pagesCount && (
          <span onClick={() => onPageChanged(currentPage + 1)}>
            &nbsp; Next &gt;
          </span>
        )}
      </div>
      <div className={styles.userList}>
        {users.map((u) => (
          <div key={u.id} className={styles.user}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={
                  u.photos.small !== null
                    ? u.photos.small
                    : "https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek="
                }
                className={styles.usersPhoto}
                alt="user"
              />
            </NavLink>
            {/* <div> */}
              <div className={styles.name}>{u.name}</div>
              <div>{u.status}</div>
            {/* </div> */}
            {/* <div> */}
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollowThunkCreator(u.id);
                  }}
                  className={classes.button1}
                  key={u.id}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.followThunkCreator(u.id);
                  }}
                  className={classes.button1}
                  key={u.id}
                >
                  Follow
                </button>
              )}
            </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
