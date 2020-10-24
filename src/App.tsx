import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Admin from "./Components/Admin";
import Account from "./Components/Account";
import "./App.css";
import { withAuthentication } from "./Components/Sessions";
import { connect } from "react-redux";
import { getAuthUser } from "./Actions/getAuthUser";

const App = (props: any) => {
  console.log("pro", props);
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/admin" component={Admin} />
      <Route path="/account" component={Account} />
    </Router>
  );
};

export default connect()(withAuthentication(App));
