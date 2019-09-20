import { FETCH_BOOKMARKED_ARTICLES } from "../../actions/actionTypes";
import articleBookmarkReducer from "../articleBookmark";
import { initialState } from "../initialState";

describe("bookmark", () => {
  it("should bookmark an article", () => {
    const state = articleBookmarkReducer(initialState, {
      type: FETCH_BOOKMARKED_ARTICLES,
      bookmarks: {}
    });
    expect(state).toHaveProperty("bookmarks");
  });
});
