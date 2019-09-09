import fetchMock from "fetch-mock";
import { createAccount } from "./users";

describe("Testing users api fetch method", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should sign up a new user", async () => {
    const user = {
      username: "Samuel",
      email: "adafia.samuel@gmail.com",
      password: "Dagger5533"
    };

    fetchMock.mock("*", {
      user: { token: "" }
    });

    await createAccount(user);
  });
});
