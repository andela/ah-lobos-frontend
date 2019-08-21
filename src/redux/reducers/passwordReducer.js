import { RESET_PASSWORD, SET_NEW_PASSWORD } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        email: action.payload
      };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        passwords: action.payload
      };
    default:
      return state;
  }
}
