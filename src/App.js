import React from "react";
import Home from "./components/Home";
import Prevention from "./components/Prevention";
import Appointment from "./components/Appointment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Tracking from "./components/Tracking";
import Footer from "./components/Footer";
import SingleBlog from "./components/SingleBlog";
import HealthDiary from "./components/HealthDiary";

function App() {
  return (
    <Router>
      <div className="App">
        <Header dark={true} />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id/">
            <SingleBlog />
          </Route>
          <Route exact path="/tracking">
            <Tracking />
          </Route>
          <Route exact path="/healthdiary">
            <HealthDiary />
          </Route>
          {/* <Route exact path="/prevention">
            <Prevention />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
