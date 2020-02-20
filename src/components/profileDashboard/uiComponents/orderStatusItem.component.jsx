import React from "react";

const OrderStatusItem = props => {
  var cart = props.item;
  const image_url = "https://admin.urbandmusic.com/storage/";
  return (
    <div>
      <div className="OrderStatusItemBox mb-2">
        {cart
          ? cart.map(item => {
              return (
                <div key={item.id} className="row d-flex align-items-center">
                  <div className="col-auto">
                    <img
                      className="PrdctIcn101"
                      src={image_url + item.files[0].image}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <div>
                      <div className="TxtSt101">{item.title}</div>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div>
                      <div className="TxtSt101">Quantity</div>
                      <div className="TxtSt102">{item.quantity}</div>
                    </div>
                  </div>
                  <div className="col-auto text-center">
                    <div>
                      <div className="TxtSt103">Price</div>
                      <div className="TxtSt104"> {item.product.price} AED</div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default OrderStatusItem;
