import * as types from "../actions/actionTypes";

export default function articleReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_ARTICLE:
      return [...state, { ...action.article }];
    default:
      return state;
  }
}
