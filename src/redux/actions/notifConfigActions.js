import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

export function getNotifConfigSuccess(preference) {
  return { type: types.GET_USER_NOTIFICATION_CONFIG, preference };
}

export function getNotifConfig(token) {
  return async function(dispatch) {
    const config = await userApi.getNotifConfig(token);
    const { email, inApp } = config.settings;
    const preference = {
      email: email.articles.show,
      inApp: inApp.articles.show
    };
    return dispatch(getNotifConfigSuccess(preference));
  };
}

export function updateNotifConfigSuccess(notifConfig) {
  return { type: types.UPDATE_USER_NOTIF_CONFIG, notifConfig };
}

export function updateNotifConfig(token, notifConfig) {
  return async function(dispatch) {
    await userApi.updateNotifConfig(token, notifConfig);
    return dispatch(updateNotifConfigSuccess(notifConfig));
  };
}
