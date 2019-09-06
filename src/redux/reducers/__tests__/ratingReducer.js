import * as types from "../../actions/actionTypes";
import rateArticleReducer from "../ratingArticle";

const action = {};
action.payload = {};
action.payload.rating = {};

describe("Test reducers for rating", () => {
  it.skip("should test the reducer types", () => {
    expect(
      rateArticleReducer(
        {},
        {
          type: types.RATE_ARTICLES_FAILURE
        }
      )
    ).toEqual({ payload: undefined });
  });

  it.skip("should test the reducer types", () => {
    const state = rateArticleReducer(
      {},
      { type: types.RATE_ARTICLES_REQUEST, payload: {} }
    );
    expect(state).toEqual(state);
  });
});
