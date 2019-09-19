import { FOLLOW_A_USER } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function followUser(state = initialState, action) {
  switch (action.type) {
    case FOLLOW_A_USER: {
      return {
        ...state,
        followResult: action.payload
      };
    }
    default:
      return state;
  }
}
