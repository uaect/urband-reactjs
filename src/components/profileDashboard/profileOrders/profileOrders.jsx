import React, { Component } from "react";
import HeaderTypeOne from '../uiComponents/headerTypeOne.component';
import OrderBox from '../uiComponents/orderBox.component';
import OrderStatusBox from '../uiComponents/orderStatusBox.component';
import OrderStatusItem from '../uiComponents/orderStatusItem.component';
const ProfileOrders = () => {

    return(
    <div>
        <div>
            <HeaderTypeOne heading = "Orders" subheading = "See how your orders are managed and check the latest status on your order."/>
        </div>
        <div className="AddressBoxTpWrp mb-2">
        <div>
          <OrderBox orderId="NAEBA0053772514">
            <OrderStatusBox/>
            <OrderStatusItem/>
          </OrderBox>
          <OrderBox orderId="NAEBA0053772514">
            <OrderStatusBox/>
            <OrderStatusItem/>
          </OrderBox>
          
        </div>
      </div>
    </div>
    )
}
export default ProfileOrders;

