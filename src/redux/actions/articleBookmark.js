import { toast } from "react-toastify";
import * as API from "../../api/consumeApi";
import * as types from "./actionTypes";

export const bookmarkArticle = slug => async dispatch => {
  try {
    const articleBookmark = await API.postData(`/api/bookmark/${slug}`);
    const bookmarks = await articleBookmark.json();
    if (articleBookmark.status === 201) {
      toast.success(bookmarks.message);
      dispatch({
        type: types.BOOKMARK_ARTICLE_REQUEST,
        payload: bookmarks
      });
    }
    if (articleBookmark.status === 409) {
      toast.warn(bookmarks.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarkedArticles = () => async dispatch => {
  try {
    const bookmarkedArticles = await API.getData("/api/bookmark/articles");
    const bookmarks = await bookmarkedArticles.json();
    dispatch({
      type: types.FETCH_BOOKMARKED_ARTICLES,
      payload: bookmarks.data
    });
  } catch (error) {
    toast.warn("server error please try again");
  }
};

export const unBookmarkArticle = slug => async dispatch => {
  try {
    const unbookmark = await API.deleteData(`/api/bookmark/${slug}`);
    const unbookmarkResult = await unbookmark.json();
    toast.success(unbookmarkResult.message);
    dispatch({
      type: types.UNBOOKMARKED_ARTICLE,
      payload: unbookmarkResult.message
    });
  } catch (error) {
    toast.warn("server error please try again");
  }
};
