import fetchMock from "fetch-mock";
import {
  getFollowers,
  getFollowee,
  followUser,
  unFollowUser
} from "../../actions/followAction";

describe("Testing follow actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const token = "jkhdvkjvajkhb";

  it("should all followers of a user", async () => {
    fetchMock.mock("*", {
      res: {}
    });
    await getFollowers(token);
  });

  it("should all followees of a user", async () => {
    fetchMock.mock("*", {
      res: {}
    });
    await getFollowee(token);
  });

  it("should follow a user", async () => {
    const username = "username";

    fetchMock.mock("*", {
      res: {}
    });
    const dispatch = jest.fn(action => action);
    await followUser(username, token)(dispatch);
  });

  it("should unfollow a user", async () => {
    const username = "person";

    fetchMock.mock("*", {
      res: {}
    });
    const dispatch = jest.fn(action => action);
    await unFollowUser(username, token)(dispatch);
  });
});
