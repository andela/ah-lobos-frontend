import { handleResponse, handleReaction } from "./readArticleUtils";

const baseUrl = process.env.BASE_URL;

export function fetchReactions(slug) {
  return fetch(`${baseUrl}/api/articles/likedislike/${slug}`, {
    method: "GET",
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch();
}

export function likeArticle(slug) {
  const token = sessionStorage.getItem("token");
  const warn = document.getElementById("warn");
  if (!token) {
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
  const token = sessionStorage.getItem("token");
  const warn = document.getElementById("warn");
  if (!token) {
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
