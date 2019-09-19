import * as readArticleActions from "../../actions/readArticleActions";
import * as types from "../../actions/actionTypes";

describe("readArticleActions", () => {
  it("should create a LIKE_ARTICLE action", () => {
    const likeReaction = {};
    const expectedAction = {
      type: types.LIKE_ARTICLE,
      likeReaction
    };

    const action = readArticleActions.likeArticleSuccess(likeReaction);

    expect(action).toEqual(expectedAction);
  });

  it("should create a DISLIKE_ARTICLE action", () => {
    const dislikeReaction = {};
    const expectedAction = {
      type: types.DISLIKE_ARTICLE,
      dislikeReaction
    };

    const action = readArticleActions.dislikeArticleSuccess(dislikeReaction);

    expect(action).toEqual(expectedAction);
  });

  it("should create a HAS_REACTED action", () => {
    const reactionData = {};
    const expectedAction = {
      type: types.HAS_REACTED,
      reactionData
    };

    const action = readArticleActions.reacted(reactionData);

    expect(action).toEqual(expectedAction);
  });

  it("should create a FETCH_ARTICLE_REACTIONS action", () => {
    const reactions = [];
    const expectedAction = {
      type: types.FETCH_ARTICLE_REACTIONS,
      reactions
    };

    const action = readArticleActions.fetchReactionSuccess(reactions);

    expect(action).toEqual(expectedAction);
  });

  it("should create test fetchReaction action", () => {
    const slug = "slug-slow";

    const dispatch = jest.fn(action => action);

    const expectedAction = readArticleActions.fetchReaction(slug)(dispatch);

    expect(expectedAction).toBeTruthy();
  });

  it("should create test likeAction action", () => {
    const slug = "slug-slow";

    const dispatch = jest.fn(action => action);

    const expectedAction = readArticleActions.likeAction(slug)(dispatch);

    expect(expectedAction).toBeTruthy();
  });

  it("should create test dislikeAction action", () => {
    const slug = "slug-slow";

    const dispatch = jest.fn(action => action);

    const expectedAction = readArticleActions.dislikeAction(slug)(dispatch);
    expect(expectedAction).toBeTruthy();
  });
});
