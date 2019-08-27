import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import * as userActions from "./userActions";
import * as types from "./actionTypes";
import "regenerator-runtime/runtime";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  const user = {
    email: "adafia.samuel@gmail.com",
    password: "Dagger5533"
  };
  it("should mock a fetch call", () => {
    fetchMock.mock("*", {
      body: user,
      headers: { "content-type": "application/json" }
    });

    const expectedAction = [{ type: types.LOGIN_USER, user }];

    const store = mockStore({ user });
    store.dispatch(userActions.loginUserSuccess(user));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
