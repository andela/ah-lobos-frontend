import {
  USER_STATS_REQUEST,
  USER_STATS_FAILURE,
  FETCH_USER_STATS_REQUEST,
  FETCH_USER_STATS_FAILURE
} from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function UserStatsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_STATS_REQUEST:
      return {
        ...state,
        payload
      };
    case FETCH_USER_STATS_REQUEST:
      return {
        ...state,
        ...payload
      };
    case USER_STATS_FAILURE:
    case FETCH_USER_STATS_FAILURE:
      return {
        error: {}
      };
    default:
      return state;
  }
}
