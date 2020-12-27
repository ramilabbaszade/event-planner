import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import EventPage from "./pages/EventPage/EventPage";
import Footer from "./components/Footer/Footer";
import UserAccount from "./pages/UserAccount/UserAccount";
import Register from "./pages/Auth/Register";
import { AuthContext } from "./shared/context/AuthContext";

function App() {
  const { isAuth } = useContext(AuthContext);
  let routes;
  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/me">
          <UserAccount />
        </Route>
        <Route path="/:eventId">
          <EventPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/:eventId">
          <EventPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/me">
          <UserAccount />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/:eventId">
          <EventPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
