
import { ADD_CART, GET_CART, DELETE_CART, PLACEORDER,QUANTITY_UPDATE } from "./types";
var urbandtoken = JSON.parse(localStorage.getItem("urbandtoken"));
export const addtocart = (id) => {
    return dispatch => {
        const body = {
            productid: id,
            token:urbandtoken,
            quantity: 1
        };
        fetch("https://admin.urbandmusic.com/api/addtocart", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: ADD_CART,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};



export const getfromcart = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                userid: 1,
                quantity: 1,
                token: urbandtoken
            };
            fetch("https://admin.urbandmusic.com/api/getcart", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                  
                    
                    if (res.result) {
                        localStorage.setItem('address', true);
                        dispatch({
                            type: GET_CART,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }


                })
                .catch(error => {
                });
        })
    };
};

export const placeOrder = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                token:urbandtoken,
                address_id:id.addressid,
                payment_option:id.selectedOption,
                grand_total:id.totalcost,
                note:"hi order fast",
                delivery_charge:id.delivery_charge,
                order_items:id.cartItems,
                vat:id.vat
            };
            fetch("https://admin.urbandmusic.com/api/proceedorder", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.result) {
                        dispatch({
                            type: PLACEORDER,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }


                })
                .catch(error => {
                });
        })
    };
};

export const deletecart = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                token: urbandtoken,
                productid: id
            };
            fetch("https://admin.urbandmusic.com/api/removecart", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.result) {
                        dispatch({
                            type: DELETE_CART,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }


                })
                .catch(error => {
                });
        })
    };
};


export const updatecartQuantity = (quantity,id) => {
    console.log("tttttttt",id);
    
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                token: urbandtoken,
                cartid: id,
                quantity:quantity
            };
            fetch("https://admin.urbandmusic.com/api/updatequantity", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    console.log("resulrtt", res);
                    if (res.success) {
                        dispatch({
                            type: QUANTITY_UPDATE,
                            value: res
                        });
                        resolve()
                    } else {
                        reject(res)
                    }


                })
                .catch(error => {
                });
        })
    };
};

