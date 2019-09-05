import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function readArticleReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLE_REACTIONS:
      return { ...state, reactions: action.reactions };
    case types.LIKE_ARTICLE:
      return {
        ...state,
        hasliked: action.likeReaction.liked,
        hasdisliked: action.likeReaction.disLiked,
        likeNum: action.likeReaction.likes,
        dislikeNum: action.likeReaction.disLikes
      };
    case types.DISLIKE_ARTICLE:
      return {
        ...state,
        hasliked: action.dislikeReaction.liked,
        hasdisliked: action.dislikeReaction.disLiked,
        likeNum: action.dislikeReaction.likes,
        dislikeNum: action.dislikeReaction.disLikes
      };
    case types.HAS_REACTED:
      return {
        ...state,
        hasliked: action.reactionData.hasliked,
        hasdisliked: action.reactionData.hasdisliked,
        likeNum: action.reactionData.likeNum,
        dislikeNum: action.reactionData.dislikeNum
      };
    default:
      return state;
  }
}
