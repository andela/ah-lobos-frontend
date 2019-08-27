import * as types from "../../actions/actionTypes";
import passwordReducer from "../passwordReducer";

describe("Test password", () => {
  it("should test the password", () => {
    expect(
      passwordReducer({}, { type: types.RESET_PASSWORD, payload: {} })
    ).toEqual({ email: {} });
  });

  it("should test the password", () => {
    console.log(
      "password ...",
      passwordReducer({}, { type: types.RESET_PASSWORD, payload: {} })
    );
    expect(
      passwordReducer({}, { type: types.SET_NEW_PASSWORD, payload: {} })
    ).toEqual({ passwords: {} });
  });
});
