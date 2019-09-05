import profileReducer from "./profileReducer";
import * as actions from "../actions/userActions";

it("should update user profile when UPDATE_USER_PROFILE is passed", () => {
  const initialState = {
    firstName: "Sam"
  };

  const payload = {
    firstName: "Samuel"
  };

  const action = actions.editUserProfile(payload);

  const newState = profileReducer(initialState, action);

  expect(newState.firstName).toEqual("Sam");
});
