import * as API from "../../api/consumeApi";
import * as types from "./actionTypes";

export const getArticles = () => async dispatch => {
  const articles = await API.getData("/api/articles");
  const articlesList = await articles.json();
  if (articles.status === 200) {
    dispatch({
      type: types.FETCH_ARTICLES_REQUEST,
      payload: articlesList.articles
    });
  } else if (articles.status === 404) {
    dispatch({
      type: types.FETCH_ARTICLES_FAILURE,
      payload: articlesList.message
    });
  } else if (articles.status === 401) {
    dispatch({
      type: types.FETCH_ARTICLES_FAILURE,
      payload: articlesList.message
    });
  }
};

export const readArticle = slug => async dispatch => {
  const getArticle = await API.getData(`/api/articles/${slug}`);
  const article = await getArticle.json();
  dispatch({
    type: types.READ_ARTICLES_REQUEST,
    payload: article
  });
};
