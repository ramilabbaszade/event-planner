import React, {useState, useEffect} from "react";
import EventContainer from "../../components/EventContainer/EventContainer";

import imageURL from "../../assets/mainImg.jpeg";
import { DATA } from "../../dummy";

import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getEvents();
  }, [setEvents, setIsLoading]);
  const getEvents = () => {
    fetch("https://event-p.herokuapp.com/eventapi/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setEvents(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="home">
      <div className="home_container">
        <aside className="home_main_pic">
          <img src={imageURL} alt="pic" />
          <div className="home_main_pic__title">Find Events Near</div>
        </aside>
        <div className="home_main">
          <section className="recently-added">
            <h2>Recently Added</h2>
            <div className="home_main__grid">
              {events.map((item) => {
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
          </section>
          <section className="recently-added">
            <h2>Near Events</h2>
            <div className="home_main__grid">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
