import React, { Component } from "react";
import AddedCartIcon from "../../../assets/img/addedtocart.gif";
const HeaderTypeOne = ({ isActive }) => {
  return (
    <div>
      {isActive ? (
        <div class="BxRc101">
          <div>
            <img src={AddedCartIcon} alt={AddedCartIcon} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default HeaderTypeOne;
