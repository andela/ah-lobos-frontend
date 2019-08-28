import * as types from "../actions/actionTypes";

const initialState = {
  token: localStorage.token || null,
  email: ""
};

export default function socialReducer(state = initialState, { type, payload }) {
  switch (type) {
    // social login
    case types.SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case types.SOCIAL_LOGIN_ERROR:
      return {
        ...state,
        error: "Sorry, login again"
      };
    default:
      return state;
  }
}
