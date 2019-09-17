import * as types from "../../actions/actionTypes";
import adminReducer from "../adminReducer";

describe("Admin reducer test", () => {
  it("", () => {
    expect(
      adminReducer({}, { type: types.FETCH_USERS_REQUEST, payload: {} })
    ).toEqual({ allUsers: {} });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.FETCH_USERS_SUCCESS, payload: {} })
    ).toEqual({ allUsers: undefined });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.FETCH_USERS_FAILURE, payload: {} })
    ).toEqual({ allUsers: {} });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.FETCH_REPORTED_REQUEST, payload: {} })
    ).toEqual({ allReport: {} });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.FETCH_REPORTED_SUCCESS, payload: {} })
    ).toEqual({ allReport: undefined });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.FETCH_REPORTED_FAILURE, payload: {} })
    ).toEqual({ allReport: {} });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.DELETE_USER_REQUEST, payload: {} })
    ).toEqual({ userDeleted: "" });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.DELETE_USER_SUCCESS, payload: {} })
    ).toEqual({ userDeleted: undefined });
  });

  it("", () => {
    expect(
      adminReducer({}, { type: types.DELETE_USER_FAILURE, payload: {} })
    ).toEqual({ userDeleted: undefined });
  });
});
