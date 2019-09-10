import * as types from "../../actions/actionTypes";
import ratingReducer from "../ratingArticle";

describe("Rating reducer tests", () => {
  it("Test the rate article request", () => {
    expect(
      ratingReducer({}, { type: types.RATE_ARTICLES_REQUEST, payload: {} })
    ).toEqual({ rating: undefined });
  });

  it("", () => {
    expect(
      ratingReducer({}, { type: types.RATE_ARTICLES_FAILURE, payload: {} })
    ).toEqual({ payload: {} });
  });

  it("", () => {
    expect(
      ratingReducer({}, { type: types.FETCH_ARTICLE_RATES, payload: {} })
    ).toEqual({ rating: undefined });
  });

  it("", () => {
    expect(
      ratingReducer({}, { type: types.FETCH_ARTICLE_RATES, payload: {} })
    ).toEqual({ rating: undefined });
  });
});
