import { handleResponse, handleReaction } from "./readArticleUtils";

const baseUrl = `https://ah-lobos-backend-swagger.herokuapp.com`;

const token = sessionStorage.getItem("token");

export function fetchReactions(slug) {
  return fetch(`${baseUrl}/api/articles/likedislike/${slug}`, {
    method: "GET",
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch();
}

export function likeArticle(slug) {
  const warn = document.getElementById("warn");
  if (token == null) {
    warn.classList.add("reveal");
    return null;
  }
  return fetch(`${baseUrl}/api/articles/like/${slug}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token
    }
  })
    .then(handleReaction)
    .catch();
}

export function dislikeArticle(slug) {
  const warn = document.getElementById("warn");
  if (token == null) {
    warn.classList.add("reveal");
    return null;
  }
  return fetch(`${baseUrl}/api/articles/dislike/${slug}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token
    }
  })
    .then(handleReaction)
    .catch();
}
