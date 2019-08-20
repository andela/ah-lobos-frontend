import * as types from "../actions/actionTypes";

const initialState = {
  isloggedin: false,
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      console.log(action);
      return {
        ...state,
        isloggedin: true,
        ...action.user
      };
    default:
      return state;
  }
}
