import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function rateArticleReducer(state = initialState, action) {
  switch (action.type) {
    case types.RATE_ARTICLES_REQUEST: {
      return {
        ...state,
        rating: action.payload.rating
      };
    }
    case types.RATE_ARTICLES_FAILURE: {
      const { payload } = action;
      return { ...state, payload };
    }
    case types.FETCH_ARTICLE_RATES:
      return {
        ...state,
        rating: action.payload.rating
      };

    default:
      return state;
  }
}
