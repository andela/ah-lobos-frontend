import { toast } from "react-toastify";
import * as API from "../../api/consumeApi";
import * as types from "./actionTypes";

export const rateArticle = data => async dispatch => {
  const articleRating = await API.postData(
    `/api/articles/${data.slug}/ratings`,
    data
  );
  const rates = await articleRating.json();
  if (articleRating.status === 201) {
    toast.success(rates.message);
    dispatch({
      type: types.RATE_ARTICLES_REQUEST,
      payload: rates.data
    });
    return;
  }
  if (articleRating.status === 401) {
    return;
  }
  toast.warn(rates.error);
  dispatch({
    type: types.RATE_ARTICLES_FAILURE,
    payload: rates.error || rates.message
  });
};

export const getArticleRating = slug => async dispatch => {
  try {
    const articleRates = await API.getData(`/api/articles/ratings/${slug}`);
    const rates = await articleRates.json();
    dispatch({
      type: types.FETCH_ARTICLE_RATES,
      payload: rates
    });
  } catch (error) {
    toast.error(error);
  }
};
