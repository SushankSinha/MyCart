import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CartPage from "./CartPage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertSign({ itemName, itemPrice }) {
  const [open, setOpen] = React.useState(false);
  const [clicked, setclicked] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const btnClicked = () => {
    setclicked(true);
  };

  const item = [{ itemName, itemPrice }];

  function myCart() {
    return item.map(function (res, index) {
      return (
        <CartPage
          key={index}
          id={index}
          onAdd={res.itemName}
          onPrice={res.itemPrice}
        />
      );
    });
  }

  // console.log(myCart());

  return (
    <>
      <Button
        style={{ backgroundColor: "lightGreen", fontWeight: "bold" }}
        variant="outlined"
        onClick={() => {
          myCart();
          handleClickOpen();
          btnClicked();
        }}
        disabled={clicked === true ? true : false}
      >
        Add to Cart
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Item added to the cart!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            I want to...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button onClick={handleClose}>Continue</Button>
          </Link>
          <Link to="/cartpage">
            <Button onClick={handleClose}>Go to cart</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertSign;
