import * as notifConfigActions from "../../actions/notifConfigActions";
import * as types from "../../actions/actionTypes";

describe("notifConfigActions", () => {
  it("should create a GET_USER_NOTIFICATION_CONFIG action", () => {
    const preference = {
      email: true,
      inApp: false
    };
    const expectedAction = {
      type: types.GET_USER_NOTIFICATION_CONFIG,
      preference
    };

    const action = notifConfigActions.getNotifConfigSuccess(preference);

    expect(action).toEqual(expectedAction);
  });

  it("should create a UPDATE_USER_NOTIF_CONFIG action", () => {
    const notifConfig = {
      email: false,
      inApp: true
    };
    const expectedAction = {
      type: types.UPDATE_USER_NOTIF_CONFIG,
      notifConfig
    };

    const action = notifConfigActions.updateNotifConfigSuccess(notifConfig);

    expect(action).toEqual(expectedAction);
  });

  it("should create test getNotifConfig action", () => {
    const token = "jhgfadjshzfjahvmhdvjk";

    const dispatch = jest.fn(action => action);

    const expectedAction = notifConfigActions.getNotifConfig(token)(dispatch);

    expect(expectedAction).toBeTruthy();
  });

  it("should create test updateNotifConfig action", () => {
    const token = "jhgfadjshzfjahvmhdvjk";

    const notifConfig = {
      email: false,
      inApp: true
    };

    const dispatch = jest.fn(action => action);

    const expectedAction = notifConfigActions.updateNotifConfig(
      token,
      notifConfig
    )(dispatch);

    expect(expectedAction).toBeTruthy();
  });
});
