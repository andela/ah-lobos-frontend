import {
  COMMENT_ARTICLE_SUCCESS,
  COMMENT_ARTICLE_ERROR,
  RETURN_ARTICLE_COMMENTS,
  DELETE_COMMENT_ARTICLE_FAILURE,
  DELETE_COMMENT_ARTICLE_SUCCESS,
  UPDATE_COMMENT_ARTICLE_FAILURE,
  UPDATE_COMMENT_ARTICLE_SUCCESS,
  LIKE_MESSAGE_REQUEST,
  LIKE_MESSAGE_FAILURE,
  DISLIKE_MESSAGE_REQUEST,
  DISLIKE_MESSAGE_FAILURE,
  FETCH_EDIT_COMMENT_REQUEST,
  FETCH_EDIT_COMMENT_SUCCESS,
  FETCH_EDIT_COMMENT_FAILURE
} from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case COMMENT_ARTICLE_SUCCESS:
      return {
        ...state,
        payload
      };
    case UPDATE_COMMENT_ARTICLE_SUCCESS:
      return {
        ...state,
        payload
      };
    case COMMENT_ARTICLE_ERROR:
    case DELETE_COMMENT_ARTICLE_FAILURE:
    case UPDATE_COMMENT_ARTICLE_FAILURE:
      return {
        ...state,
        error: "No action..."
      };
    case RETURN_ARTICLE_COMMENTS:
      return {
        ...state,
        comments: payload.comments
      };
    case DELETE_COMMENT_ARTICLE_SUCCESS:
      return {
        ...state,
        payload
      };
    case LIKE_MESSAGE_REQUEST:
      return {
        ...state,
        messageLiked: action.message
      };
    case LIKE_MESSAGE_FAILURE:
      return {
        messageLiked: {}
      };
    case DISLIKE_MESSAGE_REQUEST:
      return {
        ...state,
        messageDisliked: action.message
      };
    case DISLIKE_MESSAGE_FAILURE:
      return {
        ...state,
        messageDisliked: {}
      };
    case FETCH_EDIT_COMMENT_REQUEST:
      return {
        ...state,
        allEditComments: {}
      };
    case FETCH_EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        allEditComments: action.commentEdits
      };
    case FETCH_EDIT_COMMENT_FAILURE:
      return {
        ...state,
        allEditComments: {}
      };
    default:
      return state;
  }
}
