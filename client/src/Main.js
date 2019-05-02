import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import store from "./store";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/game/Profile";

import ThullaClient from "./components/game/ThullaClient";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

const gameRoute = () => (
  <div className="list">
    Player 0<ThullaClient playerID="0" />
    <br />
    Player 1<ThullaClient playerID="1" />
    <br />
    Player 2<ThullaClient playerID="2" />
    <br />
    Player 3<ThullaClient playerID="3" />
  </div>
);
class Main extends Component {
  state = {
    playerID: null
  };
  render() {
    if (this.state.playerID === null) this.setState({ playerID: "0" });
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/game" component={gameRoute} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default Main;
