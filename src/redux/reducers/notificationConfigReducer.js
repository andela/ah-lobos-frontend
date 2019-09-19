import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_NOTIFICATION_CONFIG:
      return {
        ...state,
        notifConfig: action.preference
      };
    case types.UPDATE_USER_NOTIF_CONFIG:
      return {
        ...state,
        notifConfig: action.notifConfig
      };
    default:
      return state;
  }
};
