/* eslint-disable max-len */
import * as types from "../../actions/actionTypes";
import commentReducer from "../commentReducer";

describe("Test comment reducer", () => {
  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.COMMENT_ARTICLE_SUCCESS, payload: {} })
    ).toEqual({ payload: {} });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.UPDATE_COMMENT_ARTICLE_SUCCESS, payload: {} }
      )
    ).toEqual({ payload: {} });
  });

  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.COMMENT_ARTICLE_ERROR, payload: {} })
    ).toEqual({ error: "No action..." });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.DELETE_COMMENT_ARTICLE_FAILURE, payload: {} }
      )
    ).toEqual({ error: "No action..." });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.UPDATE_COMMENT_ARTICLE_FAILURE, payload: {} }
      )
    ).toEqual({ error: "No action..." });
  });

  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.RETURN_ARTICLE_COMMENTS, payload: {} })
    ).toEqual({ comments: undefined });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.UPDATE_COMMENT_ARTICLE_FAILURE, payload: {} }
      )
    ).toEqual({ error: "No action..." });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.DELETE_COMMENT_ARTICLE_SUCCESS, payload: {} }
      )
    ).toEqual({ payload: {} });
  });

  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.LIKE_MESSAGE_REQUEST, payload: {} })
    ).toEqual({ comments: undefined });
  });

  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.LIKE_MESSAGE_FAILURE, payload: {} })
    ).toEqual({ messageLiked: {} });
  });

  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.DISLIKE_MESSAGE_REQUEST, payload: {} })
    ).toEqual({ messageDisliked: undefined });
  });

  it("should test create comment", () => {
    expect(
      commentReducer({}, { type: types.DISLIKE_MESSAGE_FAILURE, payload: {} })
    ).toEqual({ messageDisliked: {} });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.FETCH_EDIT_COMMENT_REQUEST, payload: {} }
      )
    ).toEqual({ allEditComments: {} });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.FETCH_EDIT_COMMENT_SUCCESS, payload: {} }
      )
    ).toEqual({ allEditComments: undefined });
  });

  it("should test create comment", () => {
    expect(
      commentReducer(
        {},
        { type: types.FETCH_EDIT_COMMENT_FAILURE, payload: {} }
      )
    ).toEqual({ allEditComments: {} });
  });
});
