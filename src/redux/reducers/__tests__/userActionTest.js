import { logOutUser, loginUserSuccess } from "../../actions/userActions";

const token = "kfbijkbv0dfmndhjvkjrggheivccs91ndcb904uur1";
const dispatch = jest.fn(action => action);

describe("user action", () => {
  it("should logout a user", () => {
    const result = loginUserSuccess(token);
    const userLogout = logOutUser(token)(dispatch);
    expect(result).toHaveProperty("type");
  });
});
