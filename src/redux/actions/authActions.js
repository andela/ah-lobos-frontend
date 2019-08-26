import { toast } from "react-toastify";
import * as types from "./actionTypes";
import * as userApi from "../../api/users";

export const request = user => {
  return { type: types.REGISTER_REQUEST, user };
};

export const success = user => {
  return { type: types.REGISTER_SUCCESS, user };
};

export const failure = error => {
  return { type: types.REGISTER_FAILURE, error };
};

export const register = user => dispatch => {
  dispatch(request(user));
  userApi
    .createAccount(user)
    .then(response => {
      if (response.error) {
        dispatch(failure());
        toast.error(response.error, { autoClose: false });
      } else {
        sessionStorage.setItem("token", response.user.token);
        localStorage.user = JSON.stringify(response.data);
        toast.success(response.message, { autoClose: false });
        dispatch(success());
        window.location.href = "/";
      }
    })
    .catch(error => {
      dispatch(failure());
      toast.error(
        `Server is not working well, please try again later.${error}`,
        {
          autoClose: false
        }
      );
    });
};
