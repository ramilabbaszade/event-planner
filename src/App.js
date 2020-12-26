import React from "react";
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


function App() {
  return (
    <Router>
      <Navigation/>
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
        <Redirect to='/'/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
