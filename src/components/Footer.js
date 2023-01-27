import React, { useState } from "react";
import nobleImage from "../images/SPONSER/nobel.png";
import whiteLogo from "../images/team-logo/Logo-White.png";

import { footerIcons } from "../data";
import Swal from "sweetalert2";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://egiteam-backend.onrender.com/api/subscribe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        console.log(json.msg);
        Swal.fire("Sorry!", json.msg, "error");
        return setLoading(false);
      }
      Swal.fire("Good job!", json.msg, "success").then(() => {
        setName("");
        setEmail("");
      });
      setLoading(false);
    } catch (err) {}
  };
  return (
    <footer>
      <div className="container">
        <div className="col">
          <img src={whiteLogo} alt="" />
        </div>
        <div className="col">
          <h3>CONTACT US</h3>
          <p>Zagazig University, Faculty Of Computer Science</p>
          <a>egiteam149@gmail.com</a>
          <div className="icons">
            {footerIcons.map((icon) => (
              <a key={icon.id} href={icon.href} target="_blank">
                <i className={icon.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="col">
          <h3>NEW SLETTER</h3>
          <form>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
            <input
              onClick={(e) => handleSubmit(e)}
              type="submit"
              value={loading ? "Loading..." : "Subscribe"}
              disabled={loading}
            />
          </form>
          <p style={{ textAlign: "center" }} id="msg"></p>
        </div>
        <div className="col">
          <h3>SPONSER</h3>
          <img src={nobleImage} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
