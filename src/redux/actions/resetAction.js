import { RESET_PASSWORD, SET_NEW_PASSWORD } from "./actionTypes";

const baseUrl = "https://ah-lobos-backend-swagger.herokuapp.com/api";

export const setEmail = data => dispatch => {
  fetch(`${baseUrl}/users/forgot-password`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(email =>
      dispatch({
        type: RESET_PASSWORD,
        payload: email
      })
    );
};
export const setNewPassword = (token, data) => dispatch => {
  fetch(`${baseUrl}/users/reset-password/${token}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(passwords =>
      dispatch({
        type: SET_NEW_PASSWORD,
        payload: passwords
      })
    );
};
