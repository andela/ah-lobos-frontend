import { combineReducers } from "redux";
import userReducer from "./userReducer";
import socialUser from "./socialReducer";
import authReducer from "./authReducer";
import reset from "./passwordReducer";
import profileReducer from "./profileReducer";
import readArticleReducer from "./readArticleReducer";
import rating from "./ratingArticle";
import articleReducer from "./articleReducer";
import commentReducer from "./commentReducer";
import getFollowers from "./getFollowers";
import followAuser from "./followAuser";
import unFollow from "./unFollowAuser";
import getFollowee from "./getFollowee";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  socialUser,
  emailData: reset,
  profile: profileReducer,
  readArticleReducer,
  articles: articleReducer,
  rating,
  comments: commentReducer,
  follower: getFollowers,
  followAuser,
  unFollow,
  getFollowee
});
export default rootReducer;
