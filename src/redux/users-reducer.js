import { usersAPI } from "../api/api";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return { ...state, users: action.users };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage };
    case "SET_TOTAL_USERS_COUNT":
      return { ...state, totalUsersCount: action.totalCount };
    case "TOOGLE_IS_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }
    case "TOOGLE_IS_FOLLOWING": {
      return {
        ...state,
        followingInProgress: action.isLoading
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = (userId) => {
  return { type: "FOLLOW", userId };
};

export const unfollow = (userId) => {
  return { type: "UNFOLLOW", userId };
};

export const setUsers = (users) => {
  return { type: "SET_USERS", users };
};

export const setCurrentPage = (currentPage) => {
  return { type: "SET_CURRENT_PAGE", currentPage };
};

export const setTotalUsersCount = (totalCount) => {
  return { type: "SET_TOTAL_USERS_COUNT", totalCount };
};

export const toogleIsLoading = (isLoading) => {
  return { type: "TOOGLE_IS_LOADING", isLoading };
};

export const toogleIsFollowing = (isLoading, userId) => {
  return {
    type: "TOOGLE_IS_FOLLOWING",
    isLoading,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsLoading(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(toogleIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowing(true, userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toogleIsFollowing(false, userId));
    });
  };
};

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowing(true, userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toogleIsFollowing(false, userId));
    });
  };
};

export default usersReducer;
