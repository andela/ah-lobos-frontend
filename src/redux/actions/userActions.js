import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import * as API from "../../api/consumeApi";

export function loginUserSuccess(user) {
  return { type: types.LOGIN_USER, user };
}

export function loginUser(user) {
  return async function(dispatch) {
    try {
      const userInfo = await userApi.loginUser(user);
      sessionStorage.setItem("username", userInfo.user.username);
      return dispatch(loginUserSuccess(user));
    } catch (error) {
      return error;
    }
  };
}

export function logOutUserSuccess() {
  return { type: types.LOGOUT_USER };
}

export function logOutUser(token) {
  return async function(dispatch) {
    try {
      await userApi.signOutUser(token);
      return dispatch(logOutUserSuccess());
    } catch (error) {
      return error;
    }
  };
}

/**
 *
 * @param {Object} username
 * @param {Funct} dispatch
 * @returns {Object} fetch user profile info response
 */
export const getUserProfile = username => async dispatch => {
  try {
    const userAuthentication = await API.getData(
      `/api/users/profile/${username}`
    );
    const userProfile = await userAuthentication.json();
    if (userAuthentication.status === 200) {
      dispatch({
        type: types.FETCH_USER_PROFILE,
        payload: userProfile.profile
      });
    }
    dispatch({
      type: types.FETCH_USER_PROFILE_FAILURE,
      payload: userProfile.message
    });
  } catch (error) {
    dispatch({ type: types.FETCH_USER_PROFILE, payload: "server error" });
  }
};

/**
 *
 * @param {Object} userInfo
 * @param {Funct} dispatch
 * @returns {Object} edit user profile info response
 */
export const editUserProfile = userInfo => async dispatch => {
  try {
    const editUser = await API.putData(
      `/api/users/profile/${userInfo.username}`,
      userInfo.usr
    );
    const updatedProfile = await editUser.json();
    if (editUser.status === 200) {
      dispatch({
        type: types.UPDATE_USER_PROFILE_SUCCESS,
        payload: "profile updated successfully"
      });
      dispatch({
        type: types.UPDATE_USER_PROFILE,
        payload: updatedProfile.user
      });
    }
    dispatch({
      type: types.UPDATE_USER_PROFILE_FAILURE,
      payload: updatedProfile.message
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_USER_PROFILE_FAILURE,
      payload: "server error"
    });
  }
};

/**
 *
 * @param {Object} userInfo
 * @param {Funct} dispatch
 * @returns {Object} edit user profile image response
 */
export const editUserProfilePicture = userInfo => async dispatch => {
  const editUser = await API.imageUpload(
    `/api/users/profile/${userInfo.username}`,
    userInfo
  );
  const updatedProfile = await editUser.json();
  if (editUser.status === 200) {
    dispatch({
      type: types.UPDATE_USER_PROFILE,
      payload: updatedProfile.user
    });
    dispatch({
      type: types.UPDATE_USER_PROFILE_SUCCESS,
      payload: "profile updated successfully"
    });
  }
  dispatch({
    type: types.UPDATE_USER_PROFILE_FAILURE,
    payload: updatedProfile.message
  });
};
