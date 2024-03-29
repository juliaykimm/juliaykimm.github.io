import React from "react";
import Navigation from "./Navigation/Navigation.jsx";
import juliapic from "./images/julia pic.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <Navigation></Navigation>
    <div className="about-content">
      <div className="about-content-wrapper">
        <div className="about-image-wrapper">
          <img src={juliapic} className="aboutpic" alt="Julia" />
        </div>
        <div className="about-text-wrapper">
          <p className="about-p">
            I’m a senior studying Integrated Digital and Design Media at NYU
            and I am interested in UI/UX design. I love design and I hope to
            create impactful and helpful work during my career. I chose
            UI/UX because I want to learn about how users interact with
            products and different designs. I want to make designs people
            will find ease in using and will appreciate.
          </p>

          <p className="about-p">
            In my free time I love to cook & bake, hike, and do puzzles!
          </p>

          <p className="about-p">
            I’ve worked in marketing, animation, and branding and have
            experience in programs like Figma and Adobe Creative Cloud.
          </p>

          <p className="about-p">
            Currently I am a UI/ UX Intern at the MTA for the TrainTime App.
            I inspect user stories and design solutions to them. I also
            design the layout of the quarterly employee newsletter and
            posters for any events hosted by MTA IT.
          </p>

          <a href="https://www.linkedin.com/in/julia-kim-0a8b1418b/">
            <p>
              Find me on LinkedIn
            </p>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
