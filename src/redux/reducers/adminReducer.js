import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        allUsers: {}
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.users
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        allUsers: {}
      };
    case types.FETCH_REPORTED_REQUEST:
      return {
        ...state,
        allReport: {}
      };
    case types.FETCH_REPORTED_SUCCESS:
      return {
        ...state,
        allReport: action.reported
      };
    case types.FETCH_REPORTED_FAILURE:
      return {
        ...state,
        allReport: {}
      };
    case types.DELETE_USER_REQUEST:
      return {
        ...state,
        userDeleted: ""
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        userDeleted: action.message
      };
    case types.DELETE_USER_FAILURE:
      return {
        ...state,
        userDeleted: action.error
      };
    default:
      return state;
  }
}
