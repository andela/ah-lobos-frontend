import { combineReducers } from "redux";
import userReducer from "./userReducer";
import socialUser from "./socialReducer";
import authReducer from "./authReducer";
import reset from "./passwordReducer";
import profileReducer from "./profileReducer";
import readArticleReducer from "./readArticleReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  socialUser,
  emailData: reset,
  profile: profileReducer,
  readArticleReducer
});
export default rootReducer;
