import { authAPI } from "../api/api";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return { type: "SET_USER_DATA", data: { userId, email, login, isAuth } };
};

export const getAuthThunkCreator = () => {
  return (dispatch) => {
    authAPI.getHeader().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(getAuthThunkCreator()));
      }
    });
  };
};

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};


export default authReducer;
