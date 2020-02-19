import React from "react";
const HeaderTypeOne = ({ buttonText }) => {
  return (
    <button
      type="button"
      className="checkout-btn-big bg-red-hover tim-btn profileBtn"
    >
      {buttonText}
    </button>
  );
};
export default HeaderTypeOne;
