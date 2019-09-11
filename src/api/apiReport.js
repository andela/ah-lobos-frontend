import { handleResponse, handleError } from "./utils";

const baseUrl = process.env.BASE_URL;

export const reportArticle = (slug, report) => {
  return fetch(`${baseUrl}/api/report/articles/${slug}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    },
    body: JSON.stringify(report)
  })
    .then(handleResponse)
    .catch(handleError);
};
