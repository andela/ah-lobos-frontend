import userReducer from "./userReducer";
import * as actions from "../actions/userActions";
import "regenerator-runtime/runtime";

it("should login a user when passed in LOGIN_USER", async () => {
  const initialState = [
    {
      isloggedin: false
    }
  ];
  const user = {
    email: "adafia.samuel@gmail.com",
    password: "Dagger5533"
  };

  const action = await actions.loginUser(user);

  const newState = userReducer(initialState, action);

  expect(newState.length).toEqual(1);
  expect(newState[0].isloggedin).toEqual(false);
});
