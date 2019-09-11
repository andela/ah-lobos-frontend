import { readArticleStats, handleError, getUserStats } from "./apiUtils";

const baseUrl = process.env.BASE_URL;
const token = sessionStorage.getItem("token");

export function createStats(slug) {
  return fetch(`${baseUrl}/api/articles/stats/${slug}/save-reading`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    }
  })
    .then(readArticleStats)
    .catch(handleError);
}

export function getAllUserStats() {
  return fetch(`${baseUrl}/api/users/reading-stats`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      token
    }
  })
    .then(getUserStats)
    .catch(handleError);
}
