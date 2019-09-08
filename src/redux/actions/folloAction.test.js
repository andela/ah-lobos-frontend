/* eslint-disable no-proto */
/* eslint-disable max-len */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getFollowers, getFollowee } from "./followAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const token = sessionStorage.getItem("token");

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
    const store = mockStore({ config: { token } });
    store.dispatch(getFollowers()).then(() => {
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
    store.dispatch(getFollowee()).then(() => {
      expect(store.getActions()).toEqual(expectedActionns);
    });
  });
});
