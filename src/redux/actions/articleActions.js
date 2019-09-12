import axios from "axios";
import { toast } from "react-toastify";
import * as types from "./actionTypes";
import * as articleApi from "../../api/articles";

export const request = article => {
  return { type: types.CREATE_ARTICLE_REQUEST, article };
};

export const success = article => {
  return { type: types.CREATE_ARTICLE_SUCCESS, article };
};

export const failure = () => {
  return { type: types.CREATE_ARTICLE_FAILURE };
};

export const fetchOneFail = () => {
  return { type: types.FETCH_ARTICLE_FAILURE };
};

export const fetchOneRequest = article => {
  return { type: types.FETCH_ARTICLE_REQUEST, article };
};

export const fetchAuthorRequest = articles => {
  return { type: types.FETCH_AUTHOR_ARTICLES_REQUEST, articles };
};

export const fetchAuthorSuccess = articles => {
  return { type: types.FETCH_AUTHOR_ARTICLES_SUCCESS, articles };
};

export const fetchAuthorError = () => {
  return { type: types.FETCH_AUTHOR_ARTICLES_FAILURE };
};

export const deleteArticleOptimistic = message => {
  return { type: types.DELETE_ARTICLE_OPTIMISTIC, message };
};

export const updateSuccess = article => {
  return { type: types.UPDATE_ARTICLE_REQUEST, article };
};

export const createArticle = article => dispatch => {
  dispatch(request(article));
  return articleApi
    .createArticle(article)
    .then(response => {
      if (response.error) {
        dispatch(failure());
      }
      dispatch(success(article));
      window.location.href = `/articles/${response.article.slug}`;
    })
    .catch(dispatch(failure()));
};

export const updateArticle = (article, slug) => dispatch => {
  dispatch(request(article));
  return articleApi
    .updateArticle(article, slug)
    .then(response => {
      if (response.error) {
        dispatch(failure());
      }
      dispatch(updateSuccess(response));
    })
    .catch(dispatch(failure()));
};

export const uploadImage = image => async dispatch => {
  const baseUrl = `https://api.cloudinary.com/v1_1/julien/image/upload`;
  const basePreset = `sa2wd4gq`;
  const imageFile = image;
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", basePreset);
  const data = await axios.post(baseUrl, formData, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  dispatch({
    type: types.UPLOAD_IMAGE,
    payload: data.data
  });
};

export const getArticle = slug => dispatch => {
  return articleApi
    .getArticle(slug)
    .then(response => {
      if (response.error) {
        dispatch(fetchOneFail());
      }
      dispatch(fetchOneRequest(response));
    })
    .catch(dispatch(fetchOneFail()));
};

export const getAuthorArticles = () => dispatch => {
  dispatch(fetchAuthorRequest());
  return articleApi
    .getAuthorArticles()
    .then(response => {
      if (response.error) {
        dispatch(fetchAuthorError());
      }
      dispatch(fetchAuthorSuccess(response));
    })
    .catch(dispatch(fetchAuthorError()));
};

export const deleteArticle = slug => dispatch => {
  return articleApi
    .deleteArticle(slug)
    .then(response => {
      if (response.error) {
        toast.error(response.error);
      }
      toast.success("Article deleted successfully");
      dispatch(deleteArticleOptimistic(response.message));
    })
    .catch();
};
