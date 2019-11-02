import {FETCH_WHO_WEW_ARE} from "./types";
//import axios from 'axios'
export const fetchWhoWeAre = () => {
    return dispatch => {
//     axios.get("https://admin.urbandmusic.com/api/aboutus")
//     .then(response => response.json())
//     .then(response => {               
//         dispatch({
//             type: FETCH_WHO_WEW_ARE,
//             value: response.result
//         });
// })
// .catch(error => {
//             //console.log("error" + JSON.stringify(error));
//         });
        fetch("https://admin.urbandmusic.com/api/aboutus", {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                //console.log("response", res.result[0]);
                
                dispatch({
                    type: FETCH_WHO_WEW_ARE,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};


