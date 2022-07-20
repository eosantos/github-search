import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import User from "./components/pages/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <>
      <div className="min-h-screen items-center justify-center bg-gray-900">
        <GithubState>
          <Navbar />
          <div className="container mx-auto px-4 bg-gray-900">
            <Router>
              <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </Router>
          </div>
        </GithubState>
      </div>
    </>
  );
};

export default App;
