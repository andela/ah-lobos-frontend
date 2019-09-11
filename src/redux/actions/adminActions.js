import { toast } from "react-toastify";
import * as types from "./actionTypes";
import * as adminApi from "../../api/admin";

export const request = () => {
  return { type: types.FETCH_USERS_REQUEST };
};

export const success = users => {
  return { type: types.FETCH_USERS_SUCCESS, users };
};

export const failure = error => {
  return { type: types.FETCH_USERS_FAILURE, error };
};

export const requestReport = () => {
  return { type: types.FETCH_REPORTED_REQUEST };
};

export const successReport = reported => {
  return { type: types.FETCH_REPORTED_SUCCESS, reported };
};

export const failureReport = error => {
  return { type: types.FETCH_REPORTED_FAILURE, error };
};

export const deleteRequest = () => {
  return { type: types.DELETE_USER_REQUEST };
};

export const deleteSuccess = message => {
  return { type: types.DELETE_USER_SUCCESS, message };
};

export const deleteFailure = () => {
  return { type: types.DELETE_USER_FAILURE };
};

export const getAllUsers = () => dispatch => {
  dispatch(request());
  return adminApi
    .getAllUsers()
    .then(response => {
      if (response.error) {
        dispatch(failure(response.error));
      }
      dispatch(success(response));
    })
    .catch(error => dispatch(failure(error)));
};

export const getAllReported = () => dispatch => {
  dispatch(requestReport());
  return adminApi
    .getAllReported()
    .then(response => {
      if (response.error) {
        dispatch(failureReport());
      }
      dispatch(successReport(response));
    })
    .catch(dispatch(failureReport()));
};

export const deleteUser = id => dispatch => {
  dispatch(deleteRequest());
  return adminApi
    .deleteUser(id)
    .then(response => {
      if (response.error) {
        toast.error(response.error);
        dispatch(deleteFailure(response.error));
      }
      toast.success(response.message);
      dispatch(deleteSuccess(response));
    })
    .catch(error => {
      toast.error("Delete user have failed.");
      dispatch(deleteFailure(error));
    });
};
