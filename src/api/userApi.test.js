import fetchMock from "fetch-mock";
import { loginUser, signOutUser } from "./userApi";

describe("Testing user api fetch methods", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should login in an existing user", async () => {
    const user = {
      email: "adafia.samuel@gmail.com",
      password: "Dagger5533"
    };

    fetchMock.mock("*", {
      user: { token: "" }
    });

    await loginUser(user);
  });

  it("should login in an existing user", async () => {
    const user = {
      email: "adafia.samuel@gmail.com",
      password: "Dagger5533"
    };

    fetchMock.mock("*", {
      user: { token: "" }
    });
    await signOutUser(user);
  });
});
