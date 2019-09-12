import {
  USER_STATS_REQUEST,
  USER_STATS_FAILURE,
  FETCH_USER_STATS_REQUEST,
  FETCH_USER_STATS_FAILURE
} from "./actionTypes";
import * as API from "../../api/readingStatsApi";

export const createStats = slug => async dispatch => {
  await API.createStats(slug)
    .then(stats => {
      dispatch({
        type: USER_STATS_REQUEST,
        payload: stats
      });
    })
    .catch(error => {
      dispatch({
        type: USER_STATS_FAILURE,
        payload: error
      });
    });
};

export const getStats = () => async dispatch => {
  await API.getAllUserStats()
    .then(stats => {
      dispatch({
        type: FETCH_USER_STATS_REQUEST,
        payload: stats
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_USER_STATS_FAILURE,
        payload: error
      });
    });
};
