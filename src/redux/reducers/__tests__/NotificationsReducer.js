import * as types from "../../actions/actionTypes";
import notificationReducer from "../userNotificationReducer";

describe("User notifications test", () => {
  it("", () => {
    expect(
      notificationReducer(
        {},
        { type: types.FETCH_USER_NOTIFICATIONS, payload: {} }
      )
    ).toEqual({ notification: undefined });
  });

  it("", () => {
    expect(
      notificationReducer(
        {},
        { type: types.READ_USER_NOTIFICATIONS, payload: {} }
      )
    ).toEqual({ notification: undefined });
  });
});
