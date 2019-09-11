import { REPORT_ARTICLE_REQUEST } from "../../actions/actionTypes";
import reportReducer from "../reportReducer";
import { initialState } from "../initialState";

describe("user reading stats", () => {
  it("should save his reading stats", () => {
    const state = reportReducer(initialState, {
      type: REPORT_ARTICLE_REQUEST,
      reportMessage: {}
    });
    expect(state).toHaveProperty("reportMessage");
  });
});
