import { GET_FOLLOWEE } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function getfollowee(state = initialState.followees, action) {
  switch (action.type) {
    case GET_FOLLOWEE:
      return {
        ...state,
        followees: action.payload
      };
    default:
      return state;
  }
}
