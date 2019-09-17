import {
  SOCIAL_LOGIN_ERROR,
  SOCIAL_LOGIN_SUCCESS
} from "../../actions/actionTypes";
import socialReducer from "../socialReducer";
import { initialState } from "../initialState";

describe("social login", () => {
  it("should login successfully", () => {
    const state = socialReducer(initialState, {
      type: SOCIAL_LOGIN_SUCCESS,
      payload: { token: "dfkjgjkhdfjxfghbjhb" }
    });
    expect(state).toHaveProperty("token");
  });

  it("should throw a login error", () => {
    const state = socialReducer(initialState, {
      type: SOCIAL_LOGIN_ERROR
    });
    expect(state).toHaveProperty("error");
  });
});
