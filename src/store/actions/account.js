
import {REGISTER,LOGIN} from "./types";

export const register = (params) => {
    return dispatch => {
        const body = {
            name:params.firstname,
            lastname:params.lastname,
            email: params.email,
            password:params.password
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

export const login = (params) => {
    return dispatch => {
        const body = {
            email: params.email,
            password:params.password
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