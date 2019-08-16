import * as types from "./actionTypes";

export function createArticle(article) {
  return { type: types.CREATE_ARTICLE, article };
}
