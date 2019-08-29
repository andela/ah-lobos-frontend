import {
  COMMENT_ARTICLE_SUCCESS,
  COMMENT_ARTICLE_ERROR,
  RETURN_ARTICLE_COMMENTS,
  DELETE_COMMENT_ARTICLE_FAILURE,
  DELETE_COMMENT_ARTICLE_SUCCESS,
  UPDATE_COMMENT_ARTICLE_FAILURE,
  UPDATE_COMMENT_ARTICLE_SUCCESS
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
    default:
      return state;
  }
}
