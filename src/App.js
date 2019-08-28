/* eslint-disable import/no-named-as-default */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialLogin from "./views/SocialLogin";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import SignupPage from "./views/SignupPage";
import NewPassword from "./views/NewPassword";
import ResetPassword from "./views/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/social-login" component={SocialLogin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/newpassword/:token" component={NewPassword} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
