import { handleResponse, handleError } from "./apiUtils";

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
