import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";
import Jumbotron from "./Jumbotron";

function Home() {
  return (
    <>
      <Jumbotron />
      {CardDetails.map(function (res, index) {
        return (
          <Card
            key={index}
            id={index}
            name={res.name}
            imgURL={res.imgURL}
            price={res.price}
            dealPrice={res.dealPrice}
            rating={res.rating}
          />
        );
      })}
    </>
  );
}

export default Home;
