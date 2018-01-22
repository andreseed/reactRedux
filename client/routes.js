import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Switch } from "react-router-dom";

import App from "./components/App";
import Greetings from "./components/Greetings";
import SignupPage from "./components/signup/SignupPage";

export default (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </App>
  </Router>
);