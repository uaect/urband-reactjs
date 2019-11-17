import React, { Component } from "react";
const HeaderTypeOne = ({ TotalAmount, VAT, Shipping, GrandTotal }) => {
  return (
    <div className="ValueBoxTp1">
      <div className="ValueBoxCntTp1 text-right">
        <div className="TotalValue">Total Amount : {TotalAmount} AED</div>
        <div className="VatValue">VAT: {VAT} AED</div>
        <div className="ShippingValue">Shipping Charge : {Shipping} AED</div>
        <div className="GrandTotalBox">
          <span>Total : {GrandTotal} AED</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderTypeOne;
