import { GET_FOLLOWEE } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function(state = initialState.followees, action) {
  switch (action.type) {
    case GET_FOLLOWEE:
      // console.log(action.payload);
      // return action.payload;
      return {
        ...state,
        followees: action.payload
      };
    default:
      return state;
  }
}