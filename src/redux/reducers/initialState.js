export const initialState = {
  profile: {},
  isloggedin: false,
  token: localStorage.token || null,
  email: "",
  passwords: {}
};
