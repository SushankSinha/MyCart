import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const AddToCart = () => {
  const [Add, setAdd] = useState(true);

  function added() {
    setAdd(false);
  }

  return (
    <div>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          added();
        }}
        disabled={Add === true ? false : "null"}
      >
        <span role="img" aria-label="Add">
          Add to cart
          <FontAwesomeIcon icon={faCartPlus} /> {""}
        </span>
        {Add}
      </button>
    </div>
  );
};

export default AddToCart;
