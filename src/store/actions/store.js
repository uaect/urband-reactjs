import { FETCH_STORELIST, FETCH_STOREDETAILS, FETCH_STORECATEGORY } from "./types";
import ApiService from "../../common/config/axiosConfig";

export const fetchStoreList = (state) => {
    //console.log("body : ", state);

    return dispatch => {
        const body = {
            page: state.page,
            category: state.category,
            pricefrom: state.priceMix,
            priceto: state.priceMax,
            sort: state.sort
        };
        ApiService.post("api/store", body)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: FETCH_STORELIST,
                        value: res.result
                    });
                }

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
        ApiService.post("api/productdetails", body)
            .then(res => res.json())
            .then(res => {
                //console.log("hhhhhhhhhhhhh", res);

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
        ApiService.post("api/storecategory", body)
            .then(res => res.json())
            .then(res => {
                //console.log(res.result);

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