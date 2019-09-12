import {
  UN_FOLLOW_A_USER,
  GET_FOLLOWERS,
  GET_FOLLOWEE,
  FOLLOW_A_USER
} from "../../actions/actionTypes";
import unfollowUser from "../unFollowAuser";
import getfollowUser from "../getFollowers";
import getfollowee from "../getFollowee";
import followUser from "../followAuser";
import { initialState } from "../initialState";

describe("follow user", () => {
  it("should follow a user", () => {
    const state = unfollowUser(initialState, {
      type: UN_FOLLOW_A_USER,
      unfollow: {}
    });
    expect(state).toHaveProperty("unfollow");
  });
  it("should get all follows", () => {
    const getFollowersState = getfollowUser(initialState, {
      type: GET_FOLLOWERS,
      followers: {}
    });
    expect(getFollowersState).toHaveProperty("followers");
  });
  it("should get all followees", () => {
    const getFolloweesState = getfollowee(initialState, {
      type: GET_FOLLOWEE,
      followees: {}
    });
    expect(getFolloweesState).toHaveProperty("followees");
  });
  it("should get all followees", () => {
    const followState = followUser(initialState, {
      type: FOLLOW_A_USER,
      follow: {}
    });
    expect(followState).toHaveProperty("follow");
  });
});
