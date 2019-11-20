
import { ADD_CART, GET_CART, DELETE_CART, PLACEORDER } from "./types";
export const addtocart = (id) => {
    return dispatch => {
        const body = {
            productid: id,
            userid: 1,
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
                token: 1
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
                token:1,
                address_id:id.addressid,
                payment_option:id.selectedOption,
                grand_total:id.totalcost,
                note:"hi order fast",
                delivery_charge:id.delivery_charge,
                order_items:id.cartItems,
                tax:id.vat
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
                token: 1,
                productid: id
            };
            fetch("https://admin.urbandmusic.com/api/removecart", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: GET_CART,
                            value: res.result
                        });
                        resolve()
                    } else {
                        dispatch({
                            type: GET_CART,
                            value: []
                        });
                        reject(false)
                    }
                })
                .catch(error => {
                    dispatch({
                        type: GET_CART,
                        value: []
                    });
                    reject(false)
                });
        })
    };

};