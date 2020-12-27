import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import { DialogContext } from "../../shared/context/DialogContext";
import { AuthContext } from "../../shared/context/AuthContext";
import Login from "../../pages/Auth/Login";
import "./Navigation.css";

const Navigation = () => {
  const {handleClickOpen} = useContext(DialogContext)
  const {isAuth, logout} = useContext(AuthContext)
  const submitHandler = ()=>{
    logout()
  }
  return (
    <header>
      <div className="header_container">
        <Link to="/"><h2>Eventito</h2></Link>
        <div className="header_search">
          <input placeholder="Search..." type="text" />
        </div>
        <div className="header_navlinks">
          <Link onClick={handleClickOpen} to="#"> Create Event </Link>
          {!isAuth && <Link to="/register">Register</Link>}
          {!isAuth && <Login/>}
          <Link to="/"> <NotificationsNoneRoundedIcon/> </Link>
          {isAuth && <Link to="/me"> <AccountCircleRoundedIcon/> </Link>}
          {isAuth && <Link to="/" onClick={submitHandler}>Logout</Link>}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
