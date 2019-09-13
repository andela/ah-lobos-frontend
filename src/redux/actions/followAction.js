import fetch from "node-fetch";
import { GET_FOLLOWERS, GET_FOLLOWEE, FOLLOW_A_USER } from "./actionTypes";

const baseUrl = "https://ah-lobos-backend-swagger.herokuapp.com/api";

export const getFollowers = token => dispatch => {
  return fetch(`${baseUrl}/followers`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      token
    }
  })
    .then(res => res.json())
    .then(followers => {
      return dispatch({
        type: GET_FOLLOWERS,
        payload: followers.followers || followers.message
      });
    });
};
export const getFollowee = token => dispatch => {
  return fetch(`${baseUrl}/followers/followees`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      token
    }
  })
    .then(res => res.json())
    .then(followees => {
      dispatch({
        type: GET_FOLLOWEE,
        payload: followees.followees || followees.message
      });
    });
};
export const followUser = username => dispatch => {
  fetch(`${baseUrl}/followers/${username}/follow`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(followResult => {
      dispatch({
        type: FOLLOW_A_USER,
        payload: followResult
      });
    });
};
export const unFollowUser = username => dispatch => {
  console.log("bhjdsn");
  fetch(`${baseUrl}/followers/${username}/unfollow`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      token: sessionStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(unfollowResult => {
      dispatch({
        type: FOLLOW_A_USER,
        payload: unfollowResult
      });
    });
};
