import * as types from "./actionTypes";
import * as API from "../../api/consumeApi";

export const getUserNotification = () => async dispatch => {
  try {
    const request = await API.getData("/api/notifications");
    const userNotification = await request.json();
    dispatch({
      type: types.FETCH_USER_NOTIFICATIONS,
      payload: userNotification
    });
  } catch (error) {
    console.log(error);
  }
};

export const readNotification = id => async dispatch => {
  try {
    const data = {
      status: "seen"
    };
    const request = await API.putData(`/api/notifications/read/${id}`, data);
    const readUserNotification = await request.json();
    dispatch({
      type: types.READ_USER_NOTIFICATIONS,
      payload: readUserNotification
    });
    await getUserNotification();
  } catch (error) {
    console.log(error);
  }
};
