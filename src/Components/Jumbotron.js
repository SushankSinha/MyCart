import React from "react";
import Blink from "react-blink-text";

function Jumbotron() {
  return (
    <div style = {{backgroundColor : "grey"}}>
      <div className="jumbotron">
        <Blink text="!! Monsoon Sale !!"></Blink>
        <p>
          <b>Get upto 30% off on any product! Offer valid till 31st August!</b>
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
