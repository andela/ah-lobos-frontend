import { GET_FOLLOWERS } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function getfollowUser(state = initialState.followers, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload
      };
    default:
      return state;
  }
}
