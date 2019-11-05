import {FETCH_WHO_WEW_ARE} from "./types";
export const fetchWhoWeAre = () => {
    return dispatch => {
        fetch("https://admin.urbandmusic.com/api/aboutus", {
            method: "POST"
        })
            .then(res => res.json())
            .then(res => {
                //console.log("response", res.result);
                
                dispatch({
                    type: FETCH_WHO_WEW_ARE,
                    value: res
                });
            })
            .catch(error => {
                
            });
    };
};