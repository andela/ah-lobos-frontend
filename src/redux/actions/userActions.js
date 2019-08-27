import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

export function loginUserSuccess(user) {
  return { type: types.LOGIN_USER, user };
}

export function loginUser(user) {
  return async function(dispatch) {
    try {
      const userInfo = await userApi.loginUser(user);
      // eslint-disable-next-line no-param-reassign
      user.username = userInfo.user.username;
      return dispatch(loginUserSuccess(user));
    } catch (error) {
      return error;
    }
  };
}
