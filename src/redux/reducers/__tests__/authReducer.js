import * as types from "../../actions/actionTypes";
import authReducer from "../authReducer";

describe("Test auth reducer", () => {
  it("it should test create account", () => {
    expect(authReducer({}, { type: types.REGISTER_REQUEST })).toEqual({
      registering: true
    });
  });

  it("it should test create account", () => {
    expect(authReducer({}, { type: types.REGISTER_FAILURE })).toEqual({});
  });

  it("it should test create account", () => {
    expect(authReducer({}, { type: types.REGISTER_SUCCESS })).toEqual({});
  });
});
