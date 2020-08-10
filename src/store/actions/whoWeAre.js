import { FETCH_WHO_WEW_ARE } from "./types";
import ApiService from "../../common/config/axiosConfig";

export const fetchWhoWeAre = (email) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            ApiService.post("api/aboutus")
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: FETCH_WHO_WEW_ARE,
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
