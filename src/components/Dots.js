import React from "react";

import dots from "../images/Dots/circle-dots.png";
import ellipseImg from "../images/Dots/eillpse-gradiant.webp";

const Dots = () => {
  return (
    <>
      <div className="dots left">
        <img src={dots} alt="" className="dot" />
      </div>
      <div className="dots right">
        <img src={dots} alt="" className="dot" />
      </div>
    </>
  );
};

const DotLeft = () => {
  return (
    <div className="dots left">
      <img src={dots} alt="" className="dot" />
    </div>
  );
};
const DoteRight = () => {
  return (
    <div className="dots right">
      <img src={dots} alt="" className="dot" />
    </div>
  );
};

const Ellipse = () => {
  return (
    <div className="dots right">
      <img src={ellipseImg} alt="" className="dot" />
    </div>
  );
};

export { Dots, DotLeft, Ellipse, DoteRight };
