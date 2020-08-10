
import { ADD_CART, GET_CART, DELETE_CART, PLACEORDER, QUANTITY_UPDATE } from "./types";
import ApiService from "../../common/config/axiosConfig";
var urbandtoken = JSON.parse(localStorage.getItem("urbandtoken"));


export const addtocart = (id) => {
    return dispatch => {
        const body = {
            productid: id,
            token: urbandtoken,
            quantity: 1
        };
        ApiService.post("api/addtocart", body)
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
            ApiService.post("api/getcart", body)
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
                token: urbandtoken,
                address_id: id.addressid,
                payment_option: id.selectedOption,
                grand_total: id.totalcost,
                note: "hi order fast",
                delivery_charge: id.delivery_charge,
                order_items: id.cartItems,
                vat: id.vat
            };
            ApiService.post("api/proceedorder", body)
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
            ApiService.post("api/removecart", body)
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


export const updatecartQuantity = (quantity, id) => {
    //console.log("tttttttt",id);

    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                token: urbandtoken,
                cartid: id,
                quantity: quantity
            };
            ApiService.post("api/updatequantity", body)
                .then(res => res.json())
                .then(res => {
                    //console.log("resulrtt", res);
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

