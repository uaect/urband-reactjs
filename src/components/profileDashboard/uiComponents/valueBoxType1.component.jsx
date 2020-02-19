import React from "react";
const HeaderTypeOne = props => {
  let totalcost = props.item.total;
  //console.log("header", props);

  let vat = props.item.ticketDetail;

  return (
    <div className="ValueBoxTp1">
      <div className="ValueBoxCntTp1 text-right">
        <div className="TotalValue">Total Amount : {totalcost} AED</div>
        <div className="VatValue">VAT: {vat} AED</div>
        <div className="ShippingValue">Shipping Charge : 0 AED</div>
        <div className="GrandTotalBox">
          <span>Total : {totalcost} AED</span>
        </div>
      </div>
    </div>
  );
};
export default HeaderTypeOne;
