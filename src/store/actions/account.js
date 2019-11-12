
import {REGISTER,LOGIN} from "./types";

export const register = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("https://admin.urbandmusic.com/api/register", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: REGISTER,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};

export const login = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("https://admin.urbandmusic.com/api/login", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: LOGIN,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};