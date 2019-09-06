import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function articleBookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOOKMARKED_ARTICLES || types.UNBOOKMARKED_ARTICLE: {
      const { payload: bookmarks } = action;
      return {
        ...state,
        bookmarks
      };
    }
    default:
      return state;
  }
}
