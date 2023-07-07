import React from "react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 mx-2"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Link
              style={{ color: "white" }}
              className="nav-link mx-2 p-2"
              to="/"
            >
              Home{" "}
            </Link>
          </ul>
          <Link style={{ margin: "auto", color: "pink" }} to="/">
            <h1>
              <ShoppingCartIcon style={{ fontSize: "45px" }} /> Apna Bazaar
            </h1>
          </Link>
          <CartButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
