import fetch from "node-fetch";
import { SEARCH_ARTICLE } from "./actionTypes";

const baseUrl = "https://ah-lobos-backend-swagger.herokuapp.com/api";

export const searchMethod = (option, title) => dispatch => {
  return fetch(`${baseUrl}/articles/search/?${option}=${title}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(searchData => {
      dispatch({
        type: SEARCH_ARTICLE,
        payload: searchData.articles || searchData.message
      });
    });
};
