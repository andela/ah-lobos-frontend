import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_NOTIFICATIONS: {
      const { payload } = action;
      const notification = { ...payload };
      return { ...state, notification: notification.notifications };
    }

    case types.READ_USER_NOTIFICATIONS: {
      const { payload } = action;
      const notification = { ...payload };
      return { ...state, notification: notification.notifications };
    }

    /**
     * returns the initial state
     */
    default:
      return state;
  }
}
