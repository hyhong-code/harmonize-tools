import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default App;
