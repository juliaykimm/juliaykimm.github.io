import React from "react";
import Navigation from "./Navigation/Navigation";

function Venmo() {
  return (
    <div className="venmo">
      <Navigation></Navigation>
      <div className="figma-wrapper">
      <iframe
      title="Figma Presentation for Venmo Split the Bill"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIhdXWW2B3Cp1yi5PzY9Grr%2Fvenmo-interactive%3Fpage-id%3D0%253A1%26node-id%3D3-35%26viewport%3D944%252C344%252C0.03%26scaling%3Dscale-down-width%26starting-point-node-id%3D3%253A35"
      allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Venmo;
