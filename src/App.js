import React from "react";
import Navbar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
