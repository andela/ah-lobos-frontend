import { handleResponse, handleError } from "./utils";

const baseUrl = `https://ah-lobos-backend-swagger.herokuapp.com`;

export function createAccount(user) {
  return fetch(`${baseUrl}/api/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
