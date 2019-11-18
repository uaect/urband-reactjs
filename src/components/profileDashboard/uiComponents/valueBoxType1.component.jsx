import React, { Component } from "react";
const HeaderTypeOne = (props) => {
  let totalcost=props.item.total;
  return (
    <div className="ValueBoxTp1">
      <div className="ValueBoxCntTp1 text-right">
        <div className="TotalValue">Total Amount : {totalcost} AED</div>
        <div className="VatValue">VAT: 0 AED</div>
        <div className="ShippingValue">Shipping Charge : 0 AED</div>
        <div className="GrandTotalBox">
          <span>Total : {totalcost} AED</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderTypeOne;
