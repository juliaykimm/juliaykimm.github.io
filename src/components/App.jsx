import React from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation.jsx";
import Projcover from "./Projcover.jsx";
import unfoundcover from "./images/unfoundcover.png";
import amazoncover from "./images/amazon cover pic.png";
import venmocover from "./images/venmo cover pic.png";
import traintimecover from "./images/traintime_cover.png";

function App() {
  return (
    <div className="App">
      <section id="Navigation">
        <Navigation />
      </section>
      <div className="home-main">
        <div className="home-main-top">

        </div>
        <div className="home-main-content">
        <div className="home-main-name">
          <h1><span>Julia Kim</span></h1>
        </div>  
        <div className="home-main-header">
          
          <p>
          <span>
          I'm an detail-oriented UI/UX designer for web and mobile interfaces.
          </span>
        </p>
          

        </div>
        <div className="home-main-body">
        <p>
          <span>
          Currently, I'm a UI/UX intern at the Metropolitan Transportation
          Authority (MTA) for the TrainTime App, designing solutions for new
          features. I also layout the quarterly employee newsletter and posters
          for any events hosted by MTA IT.
          </span>
        </p>
        </div>
    
        
        </div>
        <div className="home-footer">
          <p><span>scroll down to see my projects :)</span></p>
        </div>
        
      </div>
      
      <div>
      

      </div>
      
      <section id="projects">
        
      <Projcover
          dest="/traintime"
          img={traintimecover}
          header="TrainTime App"
          desc="Designing solutions from user feedback for the MTA TrainTime App."
          projectName="venmo"
        ></Projcover>

        <Projcover
          dest="/unfound"
          img={unfoundcover}
          header="Unfound App Redesign"
          desc="A startup app I worked for. Redesigning their filter system, feed, and profile page."
          projectName="unfound"
        ></Projcover>

        <Projcover
          dest="/amazon"
          img={amazoncover}
          header="Amazon KDP Redirect"
          desc="Making the Amazon KDP self-publishing feature more user friendly."
          projectName="amazon"
        ></Projcover>

        <Projcover
          dest="/venmo"
          img={venmocover}
          header="Venmo: Split the Bill"
          desc="A personal project designing a new feature for Venmo."
          projectName="venmo"
        ></Projcover>
      </section>
    </div>
  )
}

export default App;
