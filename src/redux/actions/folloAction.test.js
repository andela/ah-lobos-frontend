/* eslint-disable no-proto */
/* eslint-disable max-len */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getFollowers,
  getFollowee,
  followUser,
  unFollowUser
} from "./followAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJNYW56aSIsImVtYWlsIjoibWFuemlmNjBAZ21haWwuY29tIiwicm9sZSI6Im5vcm1hbCIsImlhdCI6MTU2ODEzMDgyNCwiZXhwIjoxNTY4MjE3MjI0fQ.nue_ZHIHAUCB3qtmgUpAh4fyULBpikcxb95-74UfTDU";

describe("Follow action", () => {
  it("dispatches the getFollowers actions on successful fetch request", () => {
    fetch.mockResponse({
      followers: {
        id: 6,
        firstName: "Qanda",
        lastName: "Jamal",
        username: "Jenn",
        email: "uwizeyejeann@gmail.com"
      }
    });

    const expectedActions = [
      {
        type: "GET_FOLLOWERS",
        followers: {
          id: 6,
          firstName: "Qanda",
          lastName: "Jamal",
          username: "Jenn",
          email: "uwizeyejeann@gmail.com"
        }
      }
    ];
    const store = mockStore({
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJNYW56aSIsImVtYWlsIjoibWFuemlmNjBAZ21haWwuY29tIiwicm9sZSI6Im5vcm1hbCIsImlhdCI6MTU2ODEzMDgyNCwiZXhwIjoxNTY4MjE3MjI0fQ.nue_ZHIHAUCB3qtmgUpAh4fyULBpikcxb95-74UfTDU"
      }
    });
    store.dispatch(getFollowers(token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("dispatches the getFollowees actions on successful fetch request", () => {
    fetch.mockResponse({
      followees: {
        id: 6,
        firstName: "Qanda",
        lastName: "Jamal",
        username: "Jenn",
        email: "uwizeyejeann@gmail.com"
      }
    });

    const expectedActionns = [
      {
        type: "GET_FOLLOWEE",
        followees: {
          id: 6,
          firstName: "Qanda",
          lastName: "Jamal",
          username: "Jenn",
          email: "uwizeyejeann@gmail.com"
        }
      }
    ];
    const store = mockStore({ config: { token } });
    store.dispatch(getFollowee(token)).then(() => {
      expect(store.getActions()).toEqual(expectedActionns);
    });
  });
  it("follow a user", () => {
    fetch.mockResponse({
      message: "user followed successfully"
    });

    const expectedActionns = [
      {
        type: "FOLLOW_A_USER",
        message: "user followed successfully"
      }
    ];
    const user = "Qandal";
    const store = mockStore({ config: { token } });
    store.dispatch(followUser(token, user)).then(() => {
      expect(store.getActions()).toEqual(expectedActionns);
    });
  });
  it("unfollow a user", () => {
    fetch.mockResponse({
      message: "user unfollowed successfully"
    });

    const expectedActionns = [
      {
        type: "UN_FOLLOW_A_USER",
        message: "user unfollowed successfully"
      }
    ];
    const user = "Qandal";
    const store = mockStore({ config: { token } });
    store.dispatch(unFollowUser(token, user)).then(() => {
      expect(store.getActions()).toEqual(expectedActionns);
    });
  });
});
