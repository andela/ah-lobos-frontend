import { GET_FOLLOWERS } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function(state = initialState.followers, action) {
  // const { payload: followers } = action;
  switch (action.type) {
    case GET_FOLLOWERS:
      console.log(action.payload);
      // return action.payload;
      return {
        ...state,
        followers: action.payload
      };
    default:
      return state;
  }
}
