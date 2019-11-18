import React, { Component } from "react";
import icon from "../../../assets/img/ijas.webp";
const OrderStatusItem = () => {
  return (
    <div>
      <div className="OrderStatusItemBox mb-2">
        <div className="row d-flex align-items-center">
          <div className="col-auto">
            <img className="PrdctIcn101" src={icon} alt="" />
          </div>
          <div className="col">
            <div>
              <div className="TxtSt101">JBL</div>
              <div className="TxtSt102">
                In-Ear Bluetooth Headphones With Mic Black
              </div>
            </div>
          </div>
          <div className="col text-center">
            <div>
              <div className="TxtSt101">Quantity</div>
              <div className="TxtSt102">1</div>
            </div>
          </div>
          <div className="col-auto text-center">
            <div>
              <div className="TxtSt103">Price</div>
              <div className="TxtSt104">850.12 AED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderStatusItem;
