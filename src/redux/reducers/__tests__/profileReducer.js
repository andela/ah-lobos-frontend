import * as types from "../../actions/actionTypes";
import profileReducer from "../profileReducer";

describe("Test profile reducer", () => {
  it("it should test specific type", () => {
    expect(
      profileReducer({}, { type: types.FETCH_USER_PROFILE, payload: {} })
    ).toEqual({});
  });

  it("it should test specific type", () => {
    expect(
      profileReducer({}, { type: types.UPDATE_USER_PROFILE, payload: {} })
    ).toEqual({});
  });

  it("it should test specific type", () => {
    expect(
      profileReducer({}, { type: types.UPDATE_USER_PROFILE, payload: {} })
    ).toEqual({});
  });

  it("it should test specific type", () => {
    expect(
      profileReducer(
        {},
        { type: types.FETCH_USER_PROFILE_SUCCESS, payload: {} }
      )
    ).toEqual({ success: {} });
  });

  it("it should test specific type", () => {
    expect(
      profileReducer(
        {},
        { type: types.FETCH_USER_PROFILE_SUCCESS, payload: {} }
      )
    ).toEqual({ success: {} });
  });

  it("it should test specific type", () => {
    expect(
      profileReducer(
        {},
        { type: types.FETCH_USER_PROFILE_FAILURE, payload: {} }
      )
    ).toEqual({ failure: {} });
  });

  it("it should test specific type", () => {
    expect(
      profileReducer(
        {},
        { type: types.UPDATE_USER_PROFILE_SUCCESS, payload: {} }
      )
    ).toEqual({ success: {} });
  });

  it("it should test specific type", () => {
    expect(
      profileReducer(
        {},
        { type: types.UPDATE_USER_PROFILE_FAILURE, payload: {} }
      )
    ).toEqual({ failure: {} });
  });
});
