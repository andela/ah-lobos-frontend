import { FOLLOW_A_USER } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function(state = initialState.follow, action) {
  switch (action.type) {
    case FOLLOW_A_USER: {
      return {
        ...state,
        follow: action.payload
      };
    }
    default:
      return state;
  }
}
