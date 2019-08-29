import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isloggedin: true
      };
    /**
     * returns the initial state
     */
    default:
      return state;
  }
}
