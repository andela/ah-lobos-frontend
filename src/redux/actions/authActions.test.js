import { register } from "./authActions";
import * as types from "./actionTypes";

describe("Test auth actions", () => {
  const dispatch = jest.fn(action => action);
  const user = {
    email: "",
    username: "",
    password: ""
  };
  const registering = register(user);

  it("should test auth action", () => {
    const registerError = register({});
  });
});
