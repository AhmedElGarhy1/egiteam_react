import React from "react";

const AboutItem = ({ item }) => {
  return (
    <>
      <div data-aos="flip-up" data-aos-duration="1000" className="box">
        <div className="container">
          <h2 className="main-heading">{item.header}</h2>
          <div className="content">
            <ul>
              {item.content.map((text, j) => (
                <li key={j}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`dots ${item.dotsDirection}`}>
          <img src="images/Dots/circle-dots.png" alt="" className="dot" />
        </div>
      </div>
    </>
  );
};

export default AboutItem;
