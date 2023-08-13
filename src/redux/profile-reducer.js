import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It`s Ellina" },
    { id: 3, message: 3 },
    { id: 4, message: 4 },
    { id: 5, message: 5 },
  ],
  newPostText: "",
  profile: null,
  isAuth: true,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.newPostText,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };

    case "UPDATE-POST":
      return {
        ...state,
        newPostText: action.newText,
      };

    case "SET_USER_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: "ADD-POST" };
};

export const updatePostActionCreator = (text) => {
  return { type: "UPDATE-POST", newText: text };
};

export const setUserProfile = (profile) => {
  return { type: "SET_USER_PROFILE", profile };
};

export const setStatus = (status) => {
  return { type: "SET_STATUS", status };
};



export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI
      .getStatus(userId)
      .then((response) => dispatch(setStatus(response.data)));
  };
};

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI
      .updateStatus(status)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        } else {
          alert("Max Status length - 300 symbols")
        }
    });
  };
};

export default profileReducer;
