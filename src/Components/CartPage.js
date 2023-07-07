import React from "react";

function CartPage({ onAdd, onPrice }) {
  console.log(onAdd);

  const rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  });

  return (
    <div className="card-body">
      <h5 className="card-title">{onAdd}</h5>

      <h6 className="card-text">{rupeeIndian.format(onPrice)}</h6>
    </div>
  );
}

export default CartPage;
