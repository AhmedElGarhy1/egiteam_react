import React, { useEffect, useState } from "react";

const TeamCard = ({ mentor, i }) => {
  const [aos, setAos] = useState("zoom-in");
  useEffect(() => {
    if (i % 3 === 0) setAos("fade-right");
    else if (i % 3 === 1) setAos("flip-up");
    else setAos("fade-left");
  }, []);

  return (
    <div data-aos={aos} className="card">
      <img style={{ objectFit: "fill" }} src={mentor.img} alt={mentor.name} />
      <div className="info">
        <span className="name">{mentor.name}</span>
        <div className="roles">{mentor.roles.join(" & ")}</div>

        <div className="icons">
          <a target="_blank" href={mentor.facebook}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a target="_blank" href={mentor.linkedin}>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" href={mentor.github}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
