import {
  getUserNotification,
  readNotification
} from "../../actions/userNotificationActions";

const id = 10;
const dispatch = jest.fn(action => action);

describe("User notifications", () => {
  it("should get user notifications", () => {
    const articleReport = getUserNotification()(dispatch);
    expect(articleReport).toBeTruthy();
  });

  it("should read user notification", () => {
    const articleReport = readNotification(id)(dispatch);
    expect(articleReport).toBeTruthy();
  });
});
