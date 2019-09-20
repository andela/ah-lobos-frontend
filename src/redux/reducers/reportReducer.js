import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function reportReducer(state = initialState, action) {
  switch (action.type) {
    case types.REPORT_ARTICLE_REQUEST:
      return {
        ...state,
        reportMessage: action.message
      };
    case types.REPORT_ARTICLE_FAILURE:
      return {
        ...state,
        reportMessage: action.error
      };
    default:
      return state;
  }
}
