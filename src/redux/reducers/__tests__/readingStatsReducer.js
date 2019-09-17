import {
  USER_STATS_REQUEST,
  FETCH_USER_STATS_REQUEST,
  USER_STATS_FAILURE
} from "../../actions/actionTypes";
import UserStatsReducer from "../readingStatsReducer";
import { initialState } from "../initialState";

describe("user reading stats", () => {
  it("should save his reading stats", () => {
    const state = UserStatsReducer(initialState, {
      type: USER_STATS_REQUEST,
      payload: {}
    });
    expect(state).toHaveProperty("payload");
  });

  it("should fetch all reading stats", () => {
    const fetchStatsState = UserStatsReducer(initialState, {
      type: FETCH_USER_STATS_REQUEST,
      payload: {}
    });
  });
  it("should not fetch reading stats", () => {
    const notfetchStats = UserStatsReducer(initialState, {
      type: USER_STATS_FAILURE,
      error: {}
    });
    expect(notfetchStats).toHaveProperty("error");
  });
});
