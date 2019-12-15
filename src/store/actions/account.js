
import { CONTACTUS,FOUNDED, REGISTER, LOGIN, GETADDRESS, ADDADDRESS, GETEMIRATES, SUBSCRIBE,GETEMIRATES1, REMOVEADDRESS, GETUSER, EDITUSER, GETORDEREDLIST } from "./types";
var urbandtoken = JSON.parse(localStorage.getItem("urbandtoken"));
export const register = (params) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
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
                    if (res.success) {
                        dispatch({
                            type: REGISTER,
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

export const login = (params) => {
    console.log("action : ",params);
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                type: params.loginType?params.loginType:'website',
                email: params.email,
                password: params.password?params.password:"",
                firstname: params.firstname?params.firstname:"",
                lastname: params.lastname?params.lastname:"",
                logo: params.logo?params.logo:"",
                token: params.token?params.token:""
            };
            fetch("https://admin.urbandmusic.com/api/login", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        localStorage.setItem('urbandtoken', JSON.stringify(res.token));
                        localStorage.setItem('urbandData', JSON.stringify(res.user));
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
    localStorage.removeItem('address');
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken
            };
            fetch("https://admin.urbandmusic.com/api/address", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.success) {
                        localStorage.setItem('address', true);
                        dispatch({
                            type: GETADDRESS,
                            value: res.result
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
export const getemirates = (id) => {
    return dispatch => {
        const body = {
            id: id
        };
        fetch("https://admin.urbandmusic.com/api/countries", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {

                dispatch({
                    type: GETEMIRATES,
                    value: res.result
                });
            })
            .catch(error => {
            });
    };
};

export const getemirates1 = (id) => {
    return dispatch => {
        const body = {
            id: id
        };
        fetch("https://admin.urbandmusic.com/api/countries", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {

                dispatch({
                    type: GETEMIRATES1,
                    value: res.result
                });
            })
            .catch(error => {
            });
    };
};

export const addaddress = (params) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken,
                "type": params.type,
                "first_name": params.first_name,
                "last_name": params.last_name,
                "mobile": params.mobile,
                "phone": params.phone,
                "emirate": params.emirate,
                "latitude": "1",
                "longitude": "1",
                "area": params.area,
                "street": params.street
            };

            fetch("https://admin.urbandmusic.com/api/addaddress", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: ADDADDRESS,
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

export const deleteaddress = (params) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken,
                "addressid": params
            };

            fetch("https://admin.urbandmusic.com/api/removeaddress", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: REMOVEADDRESS,
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

export const getuser = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken
            };

            fetch("https://admin.urbandmusic.com/api/getuser", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: GETUSER,
                            value: res.result
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

export const edituser = (params) => {
    console.log(params);
    
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken,
                "name": params.name,
                "email": params.email
            };
            fetch("https://admin.urbandmusic.com/api/edituser", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
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

export const getorderedlist = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken
            };

            fetch("https://admin.urbandmusic.com/api/getorderedlist", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {

                    if (res.success) {
                        dispatch({
                            type: GETORDEREDLIST,
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


export const subscribe = (email) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "email": email.email
            };

            fetch("https://admin.urbandmusic.com/api/subscribe", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: SUBSCRIBE,
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

export const aboutfounded = (email) => {
    return dispatch => {
        return new Promise((resolve, reject) => {

            fetch("https://admin.urbandmusic.com/api/founded", {
                method: "POST"
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: FOUNDED,
                            value: res.result
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
export const contactus = (email) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "email": email.email,
                "name":email.name,
                "message":email.message
            };
            fetch("https://admin.urbandmusic.com/api/contact_us", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: CONTACTUS,
                            value: res.result
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