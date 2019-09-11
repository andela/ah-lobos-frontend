/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialLogin from "./views/SocialLogin";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import SignupPage from "./views/SignupPage";
import NewPassword from "./views/NewPassword";
import ResetPassword from "./views/ResetPassword";
import EditProfile from "./views/EditProfile";
import Follow from "./views/Follow";
import Followee from "./views/getFollowee";
import CreateArticlePage from "./views/CreateArticlePage";
import PublishArticlePage from "./views/PublishArticlePage";
import ReadArticlePage from "./views/ReadArticlePage";
import AuthorArticlesPage from "./views/AuthorArticlesPage";
import EditArticlePage from "./views/EditArticlePage";
import AuthorDraftPage from "./views/AuthorDraftPage";
import Bookmarks from "./views/BookmarkedArticle";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/social-login" component={SocialLogin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/newpassword/:token" component={NewPassword} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/follow" component={Follow} />
          <Route exact path="/followee" component={Followee} />
          <Route exact path="/article/bookmark" component={Bookmarks} />
          <Route
            exact
            path="/articles/publish"
            component={PublishArticlePage}
          />
          <Route exact path="/articles/:slug" component={ReadArticlePage} />
          <Route exact path="/article/new" component={CreateArticlePage} />
          <Route exact path="/article/user" component={AuthorArticlesPage} />
          <Route exact path="/article/:slug/edit" component={EditArticlePage} />
          <Route exact path="/article/user/draft" component={AuthorDraftPage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
