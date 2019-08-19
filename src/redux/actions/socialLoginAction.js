import * as actions from "./actionTypes";

export default data => dispatch => {
  if (data.token) {
    sessionStorage.token = data.token;
    // sessionStorage.setItem("token", data.token);
    return dispatch({
      type: actions.SOCIAL_LOGIN_SUCCESS,
      payload: data
    });
  }

  return dispatch({
    type: actions.SOCIAL_LOGIN_ERROR,
    payload: {}
  });
};
