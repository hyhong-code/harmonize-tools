import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { loadJwtUser } from "./actions/userActions";
import setTokenHeader from "./utils/setTokenHeader";
import Landing from "./Components/pages/Landing";
import Home from "./Components/pages/Home";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTokenHeader(localStorage.getItem("JWT_TOKEN"));
    dispatch(loadJwtUser());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/orgchart" component={Landing} />
        <Route exact path="/orgchart/app" component={Home} />
        <Redirect from="/*" to="/orgchart" />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
