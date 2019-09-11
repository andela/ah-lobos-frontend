import {
  COMMENT_ARTICLE_SUCCESS,
  RETURN_ARTICLE_COMMENTS,
  COMMENT_ARTICLE_ERROR,
  DELETE_COMMENT_ARTICLE_FAILURE,
  DELETE_COMMENT_ARTICLE_SUCCESS,
  UPDATE_COMMENT_ARTICLE_FAILURE,
  UPDATE_COMMENT_ARTICLE_SUCCESS
} from "./actionTypes";
import * as API from "../../api/commentApi";

export const commentArticle = data => async dispatch => {
  await API.commentArticle(data)
    .then(articleComment => {
      dispatch({
        type: COMMENT_ARTICLE_SUCCESS,
        payload: articleComment
      });
    })
    .catch(error => {
      dispatch({
        type: COMMENT_ARTICLE_ERROR,
        payload: error
      });
    });
};

/**
 * returns all comments on single article
 * GET method
 */

export const getArticleComments = slug => async dispatch => {
  const comments = await API.getArticleComments(slug);
  return dispatch({
    type: RETURN_ARTICLE_COMMENTS,
    payload: comments
  });
};

/**
 * User should be able to delete an comment
 * DELETE method
 */

export const deleteArticleComment = (id, slug) => async dispatch => {
  await API.deleteComments(id, slug)
    .then(comments => {
      dispatch({
        type: DELETE_COMMENT_ARTICLE_SUCCESS,
        payload: comments
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_COMMENT_ARTICLE_FAILURE,
        payload: error
      });
    });
};

/**
 * User should be able to update an comment
 * UPDATE method
 */

export const updateArticleComment = (data, id) => async dispatch => {
  await API.updateArticleComments(data, id)
    .then(comments => {
      dispatch({
        type: UPDATE_COMMENT_ARTICLE_SUCCESS,
        payload: comments
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_COMMENT_ARTICLE_FAILURE,
        payload: error
      });
    });
};
