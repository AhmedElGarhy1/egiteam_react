import React, { useEffect, useState } from "react";

import whiteLogo from "../images/team-logo/Logo-White.png";
import topWave from "../images/waves/wave-top.png";
import middleWave from "../images/waves/wave-mid.png";
import bottomWave from "../images/waves/wave-bot.png";
import { useLocation } from "react-router-dom";


const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  // control loading section display it and remove it with position
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
      setTimeout(() => {
        // animate landing page after loading duration
        setIsLoading(true);
      }, 2500);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoading) {
      setIsLoading(false);
    }
    setTimeout(() => {
      setIsLoading(true);
    }, 100);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <div className="landing">
          <div className="overlay"></div>
          <div className="content">
            <img src={whiteLogo} alt="" />
            <p>Experience ,Grow ,Impact</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "var(--secondary-color)",
          }}></div>
      )}

      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{ backgroundImage: `url(${topWave})` }}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{ backgroundImage: `url(${middleWave})` }}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{ backgroundImage: `url(${bottomWave})` }}></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
