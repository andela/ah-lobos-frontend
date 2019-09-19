import {
  handleResponse,
  handleError,
  handleLoggout,
  handleGetConfig,
  handleUpdateConfig
} from "./apiUtils";

const baseUrl = process.env.BASE_URL;

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

export function updateNotifConfig(token, notifConfig) {
  return fetch(`${baseUrl}/api/notifications/config`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      token
    },
    body: JSON.stringify(notifConfig)
  })
    .then(handleUpdateConfig)
    .catch();
}
export function getNotifConfig(token) {
  return fetch(`${baseUrl}/api/notifications/config`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      token
    }
  })
    .then(handleGetConfig)
    .catch();
}
