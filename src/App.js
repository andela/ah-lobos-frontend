import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./views/Login";
import LandingPage from "./views/LandingPage";
// eslint-disable-next-line import/no-named-as-default
import SignupPage from "./views/SignupPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
