import { FETCH_STORELIST,FETCH_STOREDETAILS,FETCH_STORECATEGORY} from "./types";

export const fetchStoreList = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("https://admin.urbandmusic.com/api/store", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log("hhhhhhhhhhhhh", res);
                
                dispatch({
                    type: FETCH_STORELIST,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};
export const fetchStoreDetails = (id) => {
    return dispatch => {
        const body = {
            productid: id
        };
        fetch("https://admin.urbandmusic.com/api/productdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log("hhhhhhhhhhhhh", res);
                
                dispatch({
                    type: FETCH_STOREDETAILS,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};
export const fetchStoreCategory = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("https://admin.urbandmusic.com/api/productdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log("hhhhhhhhhhhhh", res);
                
                dispatch({
                    type: FETCH_STORECATEGORY,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};