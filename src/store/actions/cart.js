
import {ADD_CART,GET_CART,DELETE_CART} from "./types";
export const addtocart = (id) => {
    return dispatch => {
        const body = {
            productid: id,
            userid:1,
            quantity:1
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
        const body = {
            userid:1,
            quantity:1,
            token: 1
        };
        fetch("https://admin.urbandmusic.com/api/getcart", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log("iiiiiiii", res.result);
                dispatch({
                    type: GET_CART,
                    value: res.result
                });
            })
            .catch(error => {
            });
    };
};

export const deletecart = (id) => {
    return dispatch => {
        const body = {
            token:1,
            cartid:id
        };
        fetch("https://admin.urbandmusic.com/api/removecart", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: DELETE_CART,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};