import { UN_FOLLOW_A_USER } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function unfollowUser(state = initialState, action) {
  switch (action.type) {
    case UN_FOLLOW_A_USER: {
      return {
        ...state,
        unfollowResult: action.payload
      };
    }
    default:
      return state;
  }
}
