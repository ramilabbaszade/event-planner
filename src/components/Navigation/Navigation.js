import React from "react";
import { Link } from "react-router-dom";
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import "./Navigation.css";

const Navigation = () => {
  return (
    <header>
      <div className="header_container">
        <Link to="/"><h2>Eventito</h2></Link>
        <div className="header_search">
          <input placeholder="Search..." type="text" />
        </div>
        <div className="header_navlinks">
          <Link to="/"> Create Event </Link>
          <Link to="/"> <NotificationsNoneRoundedIcon/> </Link>
          <Link to="/me"> <AccountCircleRoundedIcon/> </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
