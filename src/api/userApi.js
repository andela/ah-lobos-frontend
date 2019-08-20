import { handleResponse, handleError } from "./apiUtils";

const baseUrl = `${process.env.BASE_URL}/api/users/login`;

export function loginUser(user) {
  return fetch(`${baseUrl}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
