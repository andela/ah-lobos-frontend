import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import LandingPage from "./views/LandingPage";
import ArticlePage from "./views/ArticlePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/articles" component={ArticlePage} />
      </Switch>
    </Router>
  );
}

export default App;
