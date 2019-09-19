import * as authActions from "../../actions/authActions";
import * as types from "../../actions/actionTypes";

describe("authActions", () => {
  it("should create a REGISTER_REQUEST action", () => {
    const user = {};
    const expectedAction = {
      type: types.REGISTER_REQUEST,
      user
    };

    const action = authActions.request(user);

    expect(action).toEqual(expectedAction);
  });

  it("should create a REGISTER_SUCCESS action", () => {
    const user = {};
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      user
    };

    const action = authActions.success(user);

    expect(action).toEqual(expectedAction);
  });

  it("should create a REGISTER_FAILURE action", () => {
    const error = {};
    const expectedAction = {
      type: types.REGISTER_FAILURE,
      error
    };

    const action = authActions.failure(error);

    expect(action).toEqual(expectedAction);
  });

  it("should create test register action", () => {
    const user = {};

    const dispatch = jest.fn(action => action);

    const expectedAction = authActions.register(user)(dispatch);

    console.log("updateNotifConfig", expectedAction);
  });
});
