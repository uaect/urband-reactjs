
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
        return new Promise((resolve, reject) => {
        const body = {
            token:1,
            productid:id
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
                    reject(false)
                }
            })
            .catch(error => {
                reject(false)
            });
        })
    };
    
};