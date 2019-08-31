import { handleResponse, handleError, handleLoggout } from "./apiUtils";

const baseUrl = `https://ah-lobos-backend-swagger.herokuapp.com`;

export function loginUser(user) {
  return fetch(`${baseUrl}/api/users/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function signOutUser(token) {
  return fetch(`${baseUrl}/api/users/logout`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token
    }
  })
    .then(handleLoggout)
    .catch(handleError);
}
