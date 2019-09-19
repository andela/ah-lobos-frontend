import fetchMock from "fetch-mock";
import { setEmail, setNewPassword } from "../../actions/resetAction";

describe("Testing rest actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  const token = "jkhdvkjvajkhb";
  const data = {};

  it("should set email", async () => {
    fetchMock.mock("*", {
      res: {}
    });
    const dispatch = jest.fn(action => action);
    await setEmail(data)(dispatch);
  });

  it("should set new password", async () => {
    fetchMock.mock("*", {
      res: {}
    });

    const dispatch = jest.fn(action => action);
    await setNewPassword(token, data)(dispatch);
  });
});
