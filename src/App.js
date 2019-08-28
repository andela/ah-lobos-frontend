import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialLogin from "./views/SocialLogin";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
// eslint-disable-next-line import/no-named-as-default
import SignupPage from "./views/SignupPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/social-login" component={SocialLogin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
