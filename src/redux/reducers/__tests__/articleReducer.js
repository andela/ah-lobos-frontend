/* eslint-disable max-len */
import articleReducer from "../articleReducer";
import * as types from "../../actions/actionTypes";

describe("Article reducers", () => {
  it("should test create article reducer", () => {
    expect(
      articleReducer({}, { type: types.CREATE_ARTICLE_REQUEST, article: {} })
    ).toEqual({ currentArticles: {} });
  });
  it("should test create article success", () => {
    expect(
      articleReducer({}, { type: types.CREATE_ARTICLE_SUCCESS, article: {} })
    ).toEqual({ currentArticles: {} });
  });
  it("should test create article failure", () => {
    expect(articleReducer({}, { type: types.CREATE_ARTICLE_FAILURE })).toEqual(
      {}
    );
  });
  it("should test fetch article", () => {
    expect(articleReducer({}, { type: types.FETCH_ARTICLE_REQUEST })).toEqual(
      {}
    );
  });
  it("should test fetch article", () => {
    expect(articleReducer({}, { type: types.FETCH_ARTICLE_REQUEST })).toEqual({
      article: undefined
    });
  });

  it("should test article reducer", () => {
    expect(articleReducer({}, { type: types.FETCH_ARTICLE_FAILURE })).toEqual({
      article: {}
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer(
        {},
        { type: types.FETCH_AUTHOR_ARTICLES_REQUEST, article: {} }
      )
    ).toEqual({
      myArticles: {}
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer({}, { type: types.FETCH_AUTHOR_ARTICLES_FAILURE })
    ).toEqual({
      myArticles: {}
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer(
        {},
        { type: types.DELETE_ARTICLE_OPTIMISTIC, articles: {} }
      )
    ).toEqual({
      deletedArticle: undefined
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer({}, { type: types.UPDATE_ARTICLE_REQUEST, article: {} })
    ).toEqual({
      updatedArticle: {}
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer({}, { type: types.FETCH_ARTICLES_REQUEST, articles: {} })
    ).toEqual({
      articles: undefined
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer({}, { type: types.READ_ARTICLES_REQUEST, story: {} })
    ).toEqual({
      story: undefined
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer({}, { type: types.UPLOAD_IMAGE, payload: {} })
    ).toEqual({
      uploadedImage: {}
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer({}, { type: types.UPLOAD_IMAGE, payload: {} })
    ).toEqual({
      uploadedImage: {}
    });
  });

  it("should test fetch article", () => {
    expect(
      articleReducer(
        {},
        { type: types.FETCH_AUTHOR_ARTICLES_SUCCESS, articles: {} }
      )
    ).toEqual({
      myArticles: {}
    });
  });
});
