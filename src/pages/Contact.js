import React, { useState } from "react";
import Swal from "sweetalert2";
import { Ellipse, Landing } from "../components";
import contactImage from "../images/form/contact.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(name, email, phone, subject, message);
    try {
      const response = await fetch(
        "https://egiteam-backend.onrender.com/api/message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, phone, subject, message }),
        }
      );
      const json = await response.json();
      setLoading(false);
      if (!response.ok) {
        console.log(json.msg);
        return Swal.fire("Sorry!", json.msg, "error");
      }
      Swal.fire("Thank you for Contacting us", json.msg, "success").then(() => {
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      });
      setLoading(false);
    } catch (err) {
      console.log(err?.message)
    }
  };

  return (
    <>
      <Landing />
      <div className="contact">
        <div className="container">
          <h2 className="main-heading">Write to Us</h2>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="contact-form">
            <form>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="number"
                placeholder="Enter your Phone Number"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-control"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                className="form-control"></textarea>
              <input
                onClick={(e) => handleSubmit(e)}
                type="submit"
                value={loading ? "Loading..." : "Submit"}
                disabled={loading}
              />
            </form>
            <img src={contactImage} alt="" />
          </div>
        </div>
        <div className="dots left">
          <img src="images/Dots/circle-dots.png" alt="" className="dot" />
        </div>
        <Ellipse />
      </div>
    </>
  );
};

export default Contact;
