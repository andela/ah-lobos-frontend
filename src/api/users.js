import { handleResponse, handleError } from "./utils";

const baseUrl = process.env.BASE_URL;

export function createAccount(user) {
  return fetch(`${baseUrl}/api/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
