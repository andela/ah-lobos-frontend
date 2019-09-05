import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function articleReducer(state = initialState, action) {
  const { payload: articles } = action;
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST: {
      return {
        ...state,
        articles
      };
    }
    case types.READ_ARTICLES_REQUEST: {
      const { payload: story } = action;
      return {
        ...state,
        story
      };
    }
    default:
      return state;
  }
}
