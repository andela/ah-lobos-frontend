import { toast } from "react-toastify";
import * as types from "./actionTypes";
import * as reportApi from "../../api/apiReport";

export const reportRequest = message => {
  return { type: types.REPORT_ARTICLE_REQUEST, message };
};

export const reportFailure = error => {
  return { type: types.REPORT_ARTICLE_REQUEST, error };
};

export const reportArticle = (slug, report) => dispatch => {
  return reportApi
    .reportArticle(slug, report)
    .then(response => {
      if (response.error) {
        toast.warn(response.error);
        console.log(response.error);
        dispatch(reportFailure(response.error));
      }
      toast.success(response.message);
      dispatch(reportRequest(response));
    })
    .catch(error => toast(error.error));
};
