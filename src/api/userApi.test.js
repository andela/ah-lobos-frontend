import fetchMock from "fetch-mock";
import {
  loginUser,
  signOutUser,
  updateNotifConfig,
  getNotifConfig
} from "./userApi";

describe("Testing user api fetch methods", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwid…A1MX0." +
    "xIOwsL5w9vuxPR93ZmGvfC54eLfin1se7GAkzJUmnhk";
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

  it("should get a user's notification preference", async () => {
    fetchMock.mock("*", {
      config: { token: "" }
    });
    await getNotifConfig(token);
  });

  it("should update a users notification preference", async () => {
    const notifConfig = {
      inApp: true,
      email: true
    };

    fetchMock.mock("*", {
      config: { token: "" }
    });
    await updateNotifConfig(token, notifConfig);
  });
});
