import {FETCH_WHO_WEW_ARE} from "./types";

export const fetchWhoWeAre = (email) => {
    return dispatch => {
        return new Promise((resolve, reject) => {

            fetch("https://admin.urbandmusic.com/api/aboutus", {
                method: "POST"
            })
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
