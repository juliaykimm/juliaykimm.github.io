import React from "react";
import "./Projcover.css";
import { Link } from "react-router-dom";

function Projcover(props) {
  return (
    <Link className="links" to={props.dest}>
      <div className="project-tile" id={props.projectName}>
        <div className="proj-img-wrapper">
          <img src={props.img} alt="project cover"/>
        </div>
        <div className="project-tile-content">
          <div className="text-header">
            <h4>{props.header}</h4>
          </div>
          <div className="project-text">
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Projcover;
