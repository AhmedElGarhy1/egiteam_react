import React from "react";
import { Landing, AboutItem, TeamBoard } from "../components";
import AboutList from "../components/About/AboutList";

const About = () => {
  return (
    <>
      <Landing />
      <main className="about">
        <AboutList />
        <TeamBoard />
      </main>
    </>
  );
};

export default About;
