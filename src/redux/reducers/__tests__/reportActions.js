import * as reportActions from "../../actions/reportActions";
import * as types from "../../actions/actionTypes";

describe("reportActions", () => {
  it("should create a REPORT_ARTICLE_REQUEST action", () => {
    const message = {};
    const expectedAction = {
      type: types.REPORT_ARTICLE_REQUEST,
      message
    };

    const action = reportActions.reportRequest(message);

    expect(action).toEqual(expectedAction);
  });

  it("should create a REPORT_ARTICLE_REQUEST action", () => {
    const error = {};
    const expectedAction = {
      type: types.REPORT_ARTICLE_REQUEST,
      error
    };

    const action = reportActions.reportFailure(error);

    expect(action).toEqual(expectedAction);
  });

  it("should create test reportArticle action", () => {
    const slug = "jhgfadjshzfjahvmhdvjk";

    const report = {
      email: false,
      inApp: true
    };

    const dispatch = jest.fn(action => action);

    const expectedAction = reportActions.reportArticle(slug, report)(dispatch);

    expect(expectedAction).toBeTruthy();
  });
});
