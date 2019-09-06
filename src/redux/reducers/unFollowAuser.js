import { UN_FOLLOW_A_USER } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function(state = initialState, action) {
  switch (action.type) {
    case UN_FOLLOW_A_USER: {
      return {
        ...state,
        unfollow: action.payload,
        isFollowing: false
      };
    }
    default:
      return state;
  }
}
