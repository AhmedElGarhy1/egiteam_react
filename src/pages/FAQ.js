import React, { useState } from "react";
import { DotLeft, Ellipse, Landing } from "../components";
import { FAQs } from "../data";

const FAQ = () => {
  return (
    <>
      <Landing />
      <div className="up_bown">
        <div className="container">
          <div className="information">
            {FAQs.map((faq) => (
              <Question key={faq.question} faq={faq} />
            ))}
          </div>
          <h3>For More Inquiries</h3>
          <div className="mail">
            <p>Mail Your Question To Support</p>
            <a href="egiteam149@gmail.com">egiteam149@gmail.com</a>
          </div>
        </div>
        <DotLeft />
        <Ellipse />
      </div>
    </>
  );
};

// Helper function
const Question = ({ faq }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpened((p) => !p)}
        data-aos="fade-right"
        className="head">
        <h2>{faq.question}</h2>
        <i
          className={`fa-sharp fa-solid ${
            opened ? "fa-chevron-up" : "fa-chevron-down"
          } edit`}></i>
      </div>
      {
        <p
          style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
          className={`down ${opened ? "active" : ""}`}>
          {faq.answer}
        </p>
      }
    </div>
  );
};

export default FAQ;
