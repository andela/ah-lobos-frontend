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
    console.log(
      "Comment ...",
      commentReducer({}, { type: types.RETURN_ARTICLE_COMMENTS, payload: {} })
    );
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
});
