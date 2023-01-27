import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DoteRight, DotLeft, Dots, Landing } from "../components";
import Sessions from "../components/SingleEvent/Sessions";
import Stats from "../components/SingleEvent/Stats";

import { events } from "../data";
const Event = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const statsRef = useRef(null);
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    const currentEvent = events.find((e) => e.id.toLowerCase() === id.toLowerCase());
    if (!currentEvent) {
      // do something
      return navigator("/404");
    }
    setEvent(currentEvent);
  }, []);

  return (
    <>
      <Landing />
      {event ? (
        <div className="event">
          <div className="box">
            <div className="container">
              <h2 className="main-heading">What is {event.header} ?</h2>
              <div className="info">
                <p className="small-center">{event.what}</p>
              </div>
            </div>

            <DoteRight />
          </div>

          <div className="box">
            <div className="container">
              <h2 className="main-heading">Why {event.header} ?</h2>
              <div className="info">
                <ul>
                  {event.why.map((p, i) => (
                    <p className="small-center" key={i}>{p}</p>
                  ))}
                </ul>
              </div>
            </div>
            <DotLeft />
          </div>

          <Stats insights={event.insights} statsRef={statsRef}/>

          <Sessions sesstions={event.sessions} fbLink={event.facebook} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Event;
