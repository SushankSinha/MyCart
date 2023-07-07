import React from "react";
import AlertSign from "./AlertSign";
function Card({ name, imgURL, rating, price, dealPrice }) {
  const rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  });

  return (
    <div
      className="container-fluid card mx-5 my-3 p-1"
      style={{
        width: "18rem",
        display: "inline-block",
        border: "2px solid black"
      }}
    >
      <img
        style={{ width: "15rem", height: "15rem" }}
        src={imgURL}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6
          className="card-text"
          style={{ textDecoration: "line-through", color: "red" }}
        >
          {rupeeIndian.format(price)}
        </h6>
        <h6 className="card-text">{rupeeIndian.format(dealPrice)}</h6>
        <h6 className="card-text">{rating}</h6>
      </div>
      <AlertSign itemName={name} itemPrice={dealPrice} />
    </div>
  );
}
export default Card;
