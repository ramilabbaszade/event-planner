import React from "react";
import { Container } from "@material-ui/core";
import EventContainer from "../../components/EventContainer/EventContainer";
import { DATA } from "../../dummy";
import IconButton from "../../shared/UIElements/IconButton";

import profileImg from "../../assets/logoL.png";

import "./UserAccount.css";

const UserAccount = () => {
  return (
    <div>
      <div className="user-account__cover"></div>
      <Container maxWidth="md">
        <div className="user-account__container">
          <div className="user-account__side">
            <div className="user-account__side_profile">
              <img src={profileImg} alt="pict" />
            </div>
          </div>
          <div className="user-account__main">
            <h1>SUP.VC</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, a?
              Ad iusto quisquam officiis repudiandae quod, nobis, quaerat earum
              magni a fugiat nihil porro, at voluptatum eos vitae odio alias!
            </p>
            <div className="user-account__main_account_buttons">
              <IconButton style={{background:'green',color:'white'}} title="Edit Profile" icon="edit" />
              <IconButton title="Settings" icon="settings" />
            </div>
            <div className="user-account_main_events_container">
              <h3>Shared Events ({DATA.length}) </h3>
              <div className="user-account_main_events">
                {DATA.map((item) => {
                  return (
                    <EventContainer
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      author={item.author}
                      picture={item.picture}
                      date={item.date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserAccount;
