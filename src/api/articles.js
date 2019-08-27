import { handleResponse, handleError } from "./utils";

const baseUrl = process.env.BASE_URL;

export function createArticle(article) {
  return fetch(`${baseUrl}/api/articles`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    },
    body: JSON.stringify(article)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateArticle(article, slug) {
  console.log("article slug...", article);
  return fetch(`${baseUrl}/api/articles/${slug}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    },
    body: JSON.stringify(article)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getArticle(slug) {
  return fetch(`${baseUrl}/api/articles/${slug}`, {
    method: "GET",
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function getAuthorArticles() {
  return fetch(`${baseUrl}/api/articles/user`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export const deleteArticle = slug => {
  return fetch(`${baseUrl}/api/articles/${slug}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(handleResponse)
    .catch(handleError);
};
