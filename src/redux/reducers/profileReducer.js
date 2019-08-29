import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * Update the state profile information if fetch user profile successed
     */
    case types.FETCH_USER_PROFILE || types.UPDATE_USER_PROFILE: {
      const { payload } = action;
      const profile = { ...payload };
      return { ...state, ...profile };
    }

    case types.UPDATE_USER_PROFILE: {
      const { payload } = action;
      return { ...state, ...payload };
    }

    /**
     * Update the state success variable if fetch user profile successed
     */
    case types.FETCH_USER_PROFILE_SUCCESS: {
      const { payload } = action;
      return { ...state, success: payload };
    }

    /**
     * Update the state failure variable if the request fail
     */
    case types.FETCH_USER_PROFILE_FAILURE: {
      const { payload } = action;
      return { ...state, failure: payload };
    }

    /**
     * Update the state success variable if update request successed
     */
    case types.UPDATE_USER_PROFILE_SUCCESS: {
      const { payload } = action;
      return { ...state, success: payload };
    }

    /**
     * Update the state failure variable if the update request fail
     */
    case types.UPDATE_USER_PROFILE_FAILURE: {
      const { payload } = action;
      return { ...state, failure: payload };
    }

    /**
     * returns the initial state
     */
    default:
      return state;
  }
}
