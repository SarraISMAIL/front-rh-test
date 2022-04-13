import "./App.css";
import React from "react";
import { Switch } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
