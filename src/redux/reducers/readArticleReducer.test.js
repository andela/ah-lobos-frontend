import readArticleReducer from "./readArticleReducer";
import * as actions from "../actions/readArticleActions";

it("should like an Article when the LIKE_ARTICLE action is passed", () => {
  const initialState = {
    hasliked: false,
    hasdisliked: false,
    likeNum: 0,
    dislikeNum: 0
  };

  const likeReaction = {
    liked: true,
    disLiked: false,
    likes: 1,
    disLikes: 0
  };

  const action = actions.likeArticleSuccess(likeReaction);

  const newState = readArticleReducer(initialState, action);

  expect(newState.hasliked).toEqual(true);
  expect(newState.likeNum).toEqual(1);
  expect(newState.hasdisliked).toEqual(false);
  expect(newState.dislikeNum).toEqual(0);
});

it("should dislike an Article when DISLIKE_ARTICLE action is passed", () => {
  const initialState = {
    hasliked: false,
    hasdisliked: false,
    likeNum: 0,
    dislikeNum: 0
  };

  const dislikeReaction = {
    liked: false,
    disLiked: true,
    likes: 0,
    disLikes: 1
  };

  const action = actions.dislikeArticleSuccess(dislikeReaction);

  const newState = readArticleReducer(initialState, action);

  expect(newState.hasliked).toEqual(false);
  expect(newState.likeNum).toEqual(0);
  expect(newState.hasdisliked).toEqual(true);
  expect(newState.dislikeNum).toEqual(1);
});

it("should update state when HAS_REACTED action is passed", () => {
  const initialState = {
    hasliked: false,
    hasdisliked: false,
    likeNum: 0,
    dislikeNum: 0
  };

  const reactionData = {
    hasliked: false,
    hasdisliked: true,
    likeNum: 0,
    dislikeNum: 1
  };

  const action = actions.reacted(reactionData);

  const newState = readArticleReducer(initialState, action);

  expect(newState.hasliked).toEqual(false);
  expect(newState.likeNum).toEqual(0);
  expect(newState.hasdisliked).toEqual(true);
  expect(newState.dislikeNum).toEqual(1);
});
