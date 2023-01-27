import React from "react";
import { Ellipse, Dots } from "../components";
import Landing from "../components/Landing";

import "swiper/css/pagination";
import teamImage from "../images/background/WhatsApp Image 2022-08-27 at 9.44.27 PM.jpeg";
import googlePartnerImage from "../images/Partners/google.png";
import HomeSwiper from "../components/Home/HomeSwiper";

const Home = () => {
  return (
    <>
      <Landing />
      <main className="home">
        <div className="box">
          <div className="container">
            <h2 className="main-heading">What Is EGI Team</h2>
            <div className="what-is-egi">
              <p data-aos-duration="1500" data-aos="fade-right">
                <span> EGI </span>is a non-profit organization which based on
                volunteer work to help computer science students in both tracks:
                technical and soft skills.
              </p>
              <div
                data-aos-duration="1500"
                data-aos="flip-up"
                className="image">
                <img src={teamImage} alt="" />
              </div>
            </div>
          </div>
          <Dots />
        </div>

        <HomeSwiper />

        <div className="box">
          <div className="container">
            <h2 className="main-heading">Our Partners</h2>
            <div className="our-partners">
              <div
                data-aos-duration="1000"
                data-aos="flip-up"
                className="image">
                <img src={googlePartnerImage} alt="" />
              </div>
            </div>
          </div>
          <Ellipse />
        </div>
      </main>
    </>
  );
};

export default Home;
