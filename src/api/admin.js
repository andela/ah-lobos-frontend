import { handleError, handleResponse } from "./utils";

const baseUrl = process.env.BASE_URL;

export const getAllUsers = () => {
  return fetch(`${baseUrl}/api/admin/users`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

export const getAllReported = () => {
  return fetch(`${baseUrl}/api/report/articles`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(handleResponse)
    .catch(handleError);
};

export const deleteUser = id => {
  return fetch(`${baseUrl}/api/admin/users/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(handleResponse)
    .catch(handleError);
};
