import React from "react";

const EventCard = ({ card: event }) => {
  return (
    <>
      <div data-aos-duration="1500" data-aos="fade-up" className="box">
        <div className="head">
          <h2 className="main-heading">{event.header}</h2>
          <div className="info">
            <p>
              <i className="fas fa-light fa-calendar-days"></i>
              {event.date}
            </p>
            <p>
              <i className="fas fa-light fa-location-dot"></i>
              
              {event.location}
            </p>
          </div>
        </div>
        <div className="body">
          <div className="image">
            <img src={event.img} alt="" />
            <div className="overlay">
              <a href={event.href} target="_blank">
                <i className="fa-regular fa-eye"></i>
              </a>
            </div>
          </div>
          <p>
            <span> {event.header} </span> {event.content}
          </p>
        </div>
        <div className="foot">
          <a
            className="cta-btn"
            style={{ paddingTop: "8.8px", paddingBottom: "8.83px" }}
            href={event.href}
            target="_blank">
            See More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default EventCard;
