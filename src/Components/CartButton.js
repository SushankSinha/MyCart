import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import React from "react";

function CartButton() {
  return (
    <Link to="/cartpage">
      <button type="button" className="btn btn-primary position-relative mx-3">
        <ShoppingCartIcon /> Cart
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
      </button>
    </Link>
  );
}

export default CartButton;
