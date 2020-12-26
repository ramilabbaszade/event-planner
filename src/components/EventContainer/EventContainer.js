import React from "react";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

import "./EventContainer.css";

const EventContainer = ({ title, picture, id, date, author }) => {
  return (
    <div key={id} className="event_container">
      <div className="event_image">
        <Link to="/">
          <img src={picture} alt={title} />
        </Link>
      </div>
      <div className="event-body">
        <div className="event-body__info">
          <div className="event_body__date">{date}</div>
          <Link to={`/${id}`}> <div className="event_body__title">{title}</div></Link>
          <div className="event_body_author">{author}</div>
        </div>
        <div className="event-body__buttons">
          <div className="btn">
            <Icon style={{ fontSize: 16 }} color="primary">
              favorite
            </Icon>{" "}
            Interesting
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
