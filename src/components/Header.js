import React from "react";
import videoHeader from "../assets/header.mp4";
import Video from "./styledComponents/Video";
import Nav from "./styledComponents/Nav";
import Title from "./styledComponents/Title";
import AboutSection from "./AboutSection";
export default function Header() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  return (
    <React.Fragment>
      <section>
        <Nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </Nav>
        <Title>
          <div>
            <span>A</span>
            <span>m</span>
            <span>a</span>
            <span>z</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span> </span>
            <span>F</span>
            <span>o</span>
            <span>o</span>
            <span>d</span>
            <span>i</span>
            <span>e</span>
            <span>s</span>
          </div>
          <button onClick={openNav}>Scroll</button>
        </Title>
        <Video src={videoHeader} muted loop autoPlay></Video>
      </section>
      <AboutSection />
    </React.Fragment>
  );
}
