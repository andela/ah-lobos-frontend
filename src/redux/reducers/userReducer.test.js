import userReducer from "./userReducer";
import * as actions from "../actions/userActions";
import "regenerator-runtime/runtime";

it("should login a user when passed in LOGIN_USER", () => {
  const initialState = {
    isloggedin: false
  };
  const user = {
    isloggedin: true
  };

  const action = actions.loginUserSuccess(user);

  const newState = userReducer(initialState, action);

  expect(newState.isloggedin).toEqual(true);
});

it("should be logged out when LOGOUT_USER is passed", () => {
  const initialState = {
    isloggedout: false
  };
  const user = {
    isloggedout: true
  };

  const action = actions.logOutUserSuccess(user);

  const newState = userReducer(initialState, action);

  expect(newState.isloggedout).toEqual(true);
});
