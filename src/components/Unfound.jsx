import React from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation.jsx";
function Unfound() {
  return (

    <div className="unfound">
      <Navigation></Navigation>
      
      <div className="figma-wrapper">
      <iframe
      title="Figma Presentation for Unfound"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwdWQgFbKvwXUYil3hQBsC3%2Funfound-interactive%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D269%252C293%252C0.04%26scaling%3Dscale-down-width%26starting-point-node-id%3D1%253A2"
      allowFullScreen></iframe>
      </div>
      
    </div>
  );
}

export default Unfound;
