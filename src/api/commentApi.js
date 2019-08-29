import {
  commentResponse,
  handleError,
  getAllComments,
  deleteCommentResponse,
  updatedCommentResponse
} from "./apiUtils";

const baseUrl = `https://ah-lobos-backend-swagger.herokuapp.com`;
const token = sessionStorage.getItem("token");

export function commentArticle(data) {
  return fetch(`${baseUrl}/api/comments/articles/${data.slug}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    },
    body: JSON.stringify(data.payload)
  })
    .then(commentResponse)
    .catch(handleError);
}

export function getArticleComments(slug) {
  return fetch(`${baseUrl}/api/comments/articles/${slug}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then(getAllComments)
    .catch(handleError);
}

export function deleteComments(id, slug) {
  return fetch(`${baseUrl}/api/comments/articles/${slug}/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    }
  })
    .then(deleteCommentResponse)
    .catch(handleError);
}

export function updateArticleComments(data, id) {
  return fetch(`${baseUrl}/api/comments/articles/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    },
    body: JSON.stringify(data)
  })
    .then(updatedCommentResponse)
    .catch(handleError);
}
