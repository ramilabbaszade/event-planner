import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CLogo from "../../assets/logoL.png"
import CPhoto from "../../assets/mainImg.jpeg";

import IconButton from "../../shared/UIElements/IconButton";

import "./EventPage.css";

const EventPage = () => {
  const { eventId } = useParams();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getEvents(eventId);
  }, [setEvents, setIsLoading, eventId]);
  const getEvents = (eventId) => {
    console.log(eventId);
    fetch(`https://event-p.herokuapp.com/eventdetail/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <div className="eventpage">
        <div className="eventpage_head">
          <Container maxWidth="md">
            <div className="eventpage_image">
              <img src={`https://event-p.herokuapp.com${events.picture}`|| CPhoto} alt={events.title} />
            </div>
            <div className="eventpage_header">
              <div className="eventpage_header__date">{events.date}</div>
              <div className="eventpage_header__title">{events.title}</div>
              <div className="eventpage_header__location">
                {events.location}
              </div>
              <hr />
            </div>
            <div className="eventpage_nav">
              <div className="eventpage_nav__organiser">
                <img src={CLogo} alt="S" />
                <div>
                  <div>{events.author}</div>
                  <small>Startup Accelerator Company</small>
                </div>
              </div>
              <div className="eventpage_nav__buttons">
                <IconButton
                  title="Interesting"
                  color="primary"
                  icon="favorite"
                />
                <IconButton title="Going" icon="check" />
                <IconButton icon="share" />
              </div>
            </div>
          </Container>
        </div>
        <div className="eventpage_info">
          <Container maxWidth="md">
            <div className="eventpage_info__grid">
              <div className="eventpage_info__left">
                <div className="eventpage_info__left_details">
                  <div className="eventpage_info__left_details_item">
                    <IconButton
                      title="200 persons responsed"
                      icon="assignment"
                    />
                  </div>
                  <div className="eventpage_info__left_details_item">
                    <IconButton title={events.location} icon="flight takeoff" />
                  </div>
                  <div className="eventpage_info__left_details_item">
                    <IconButton title="Tickets 10$" icon="label" />
                  </div>
                  <div className="eventpage_info__left_details_item">
                    {events.description}
                  </div>
                </div>
              </div>
              <div className="eventpage_info__right">
                <div className="eventpage_info__right__find_ticket">
                  <h2>Tickets</h2>
                  <div style={{ margin: "1rem 0" }}>
                    <IconButton title="Find Ticket" icon="launch" />
                  </div>
                </div>
                <div
                  className="eventpage_info__right__showmap"
                  style={{ margin: "1rem 0" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.795239105607!2d49.86136393369717!3d40.40914839828277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d56b1ab24ad%3A0xb8a376a7a5d35778!2sSUP%20Accelerator!5e0!3m2!1sen!2s!4v1608995917060!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    title="map"
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventPage;
