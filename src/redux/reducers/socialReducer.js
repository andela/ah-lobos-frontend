import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function socialReducer(state = initialState, { type, payload }) {
  switch (type) {
    // social login
    case types.SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case types.SOCIAL_LOGIN_ERROR:
      return {
        ...state,
        error: "Sorry, login again"
      };
    default:
      return state;
  }
}
