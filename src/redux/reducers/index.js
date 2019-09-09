import { combineReducers } from "redux";
import userReducer from "./userReducer";
import socialUser from "./socialReducer";
import authReducer from "./authReducer";
import reset from "./passwordReducer";
import profileReducer from "./profileReducer";
import readArticleReducer from "./readArticleReducer";
import rating from "./ratingArticle";
import commentReducer from "./commentReducer";
import getFollowers from "./getFollowers";
import followAuser from "./followAuser";
import unFollow from "./unFollowAuser";
import getFollowee from "./getFollowee";
import articles from "./articleReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  socialUser,
  emailData: reset,
  profile: profileReducer,
  articles,
  readArticleReducer,
  rating,
  comments: commentReducer,
  follower: getFollowers,
  followAuser,
  unFollow,
  getFollowee
});
export default rootReducer;
