import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./screens/Home";
import Detail from "./screens/Detail"

function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/details/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default Routes;
