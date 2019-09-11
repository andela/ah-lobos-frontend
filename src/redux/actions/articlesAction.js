import * as API from "../../api/consumeApi";
import * as types from "./actionTypes";

export const getArticles = () => async dispatch => {
  const articles = await API.getData("/api/articles");
  try {
    const articlesList = await articles.json();
    if (articles.status === 200) {
      dispatch({
        type: types.FETCH_ARTICLES_REQUEST,
        payload: articlesList.articles
      });
    }
    // dispatch({
    //   type: types.FETCH_ARTICLES_FAILURE,
    //   payload: articlesList.message
    // });
  } catch (error) {
    console.log(error);
    console.clear();
  }
};

export const readArticle = slug => async dispatch => {
  try {
    const getArticle = await API.getData(`/api/articles/${slug}`);
    const article = await getArticle.json();
    dispatch({
      type: types.READ_ARTICLES_REQUEST,
      payload: article
    });
  } catch (error) {
    console.log(error);
  }
};
