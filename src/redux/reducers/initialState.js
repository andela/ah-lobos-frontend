export const initialState = {
  profile: {},
  isloggedin: false,
  isloggedout: false,
  token: localStorage.token || null,
  email: "",
  passwords: {},
  reactions: [],
  hasliked: false,
  hasdisliked: false,
  likeNum: 0,
  dislikeNum: 0
};
