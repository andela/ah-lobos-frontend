import * as types from "./actionTypes";
import { hasReacted } from "../../api/readArticleUtils";
import {
  fetchReactions,
  likeArticle,
  dislikeArticle
} from "../../api/readArticleApi";

export function fetchReactionSuccess(reactions) {
  return { type: types.FETCH_ARTICLE_REACTIONS, reactions };
}

export function reacted(reactionData) {
  return { type: types.HAS_REACTED, reactionData };
}

export function fetchReaction(slug) {
  return async function(dispatch) {
    try {
      const reactions = await fetchReactions(slug);
      const reactionData = await hasReacted(reactions);
      dispatch(reacted(reactionData));
      return dispatch(fetchReactionSuccess(reactions));
    } catch (error) {
      return error;
    }
  };
}

export function likeArticleSuccess(likeReaction) {
  return { type: types.LIKE_ARTICLE, likeReaction };
}

export function likeAction(slug) {
  return async function(dispatch) {
    try {
      const likeReaction = await likeArticle(slug);
      return dispatch(likeArticleSuccess(likeReaction));
    } catch (error) {
      return error;
    }
  };
}

export function dislikeArticleSuccess(dislikeReaction) {
  return { type: types.DISLIKE_ARTICLE, dislikeReaction };
}

export function dislikeAction(slug) {
  return async function(dispatch) {
    try {
      const dislikeReaction = await dislikeArticle(slug);
      return dispatch(dislikeArticleSuccess(dislikeReaction));
    } catch (error) {
      return error;
    }
  };
}
