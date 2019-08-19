import { combineReducers } from "redux";
import userReducer from "./userReducer";
import socialUser from "./socialReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  socialUser
});

export default rootReducer;
