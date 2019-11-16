
import { REGISTER, LOGIN, GETADDRESS,ADDADDRESS } from "./types";

export const register = (params) => {
    return dispatch => {
        const body = {
            name: params.firstname,
            lastname: params.lastname,
            email: params.email,
            password: params.password
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
        return new Promise((resolve, reject) => {
            const body = {
                email: params.email,
                password: params.password
            };
            fetch("https://admin.urbandmusic.com/api/login", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        localStorage.setItem('urbandtoken', JSON.stringify(res.token));
                        dispatch({
                            type: LOGIN,
                            value: res
                        });
                        resolve()
                    } else {
                        reject(res)
                    }
                })
                .catch(error => {
                    reject(error)
                });
        })
    };
};

export const getaddress = (params) => {
    return dispatch => {
        const body = {
            "token": 1
        };
        fetch("https://admin.urbandmusic.com/api/address", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GETADDRESS,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};
export const addaddress = (params) => {
    return dispatch => {
      
            params.token = 1
    
        fetch("https://admin.urbandmusic.com/api/addaddress", {
            method: "POST",
            body: JSON.stringify(params)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: ADDADDRESS,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};