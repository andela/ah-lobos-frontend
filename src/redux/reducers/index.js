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
import unFollowAuser from "./unFollowAuser";
import getFollowee from "./getFollowee";
import articles from "./articleReducer";
import articleBookmarks from "./articleBookmark";
import report from "./reportReducer";
import adminReducer from "./adminReducer";
import userStats from "./readingStatsReducer";
import notifConfig from "./notificationConfigReducer";
import notificationReducer from "./userNotificationReducer";
import searchReducer from "./searchReducer";

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
  getFollowee,
  bookmarks: articleBookmarks,
  unFollowAuser,
  report,
  admin: adminReducer,
  userStats,
  notifConfig,
  notifications: notificationReducer,
  searchData: searchReducer
});
export default rootReducer;
