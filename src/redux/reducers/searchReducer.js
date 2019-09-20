import { SEARCH_ARTICLE } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTICLE:
      return {
        ...state,
        searchMaterial: action.payload
      };
    default:
      return state;
  }
}
