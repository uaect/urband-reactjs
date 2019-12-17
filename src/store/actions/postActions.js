import { EVENTDETAIL, FETCH_SPOTLIGHT, PREVIOUSSHOW, FETCH_EVENTTICKET, FETCH_POSTS, FETCH_CONTACT, FETCH_CLIENTS, FETCH_CLIENTSLIST, FETCH_EVENTLIST, FETCH_EVENTDETAIL, FETCH_MENUES } from "./types";
var urbandtoken = JSON.parse(localStorage.getItem("urbandtoken"));

export const fetchPosts = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("https://admin.urbandmusic.com/api/artists", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_POSTS,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};


export const fetchContact = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
        fetch("https://admin.urbandmusic.com/api/aboutus", {
            method: "POST"
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: FETCH_CONTACT,
                        value: res.result
                    });
                    resolve()
                } else {
                    reject(res)
                }
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
        });
    };
};


export const fetchClients = () => {
    return dispatch => {
        const body = {
            page: 1
        };

        fetch("https://admin.urbandmusic.com/api/clientsfeedback", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                //console.log("resssssssssss", res.result[0]);
                dispatch({
                    type: FETCH_CLIENTS,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};

export const fetchClientsList = () => {
    return dispatch => {
        const body = {
            page: 1
        };

        fetch("https://admin.urbandmusic.com/api/clients", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                //console.log("resssssssssss", res.result[0]);
                dispatch({
                    type: FETCH_CLIENTSLIST,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};

export const fetchEvent = () => {
    return dispatch => {
        const body = {
            page: 1
        };

        fetch("https://admin.urbandmusic.com/api/events", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_EVENTLIST,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};

export const fetchEventDetail = (page) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const body = {
                "page": page
            };

            fetch("https://admin.urbandmusic.com/api/ticketevents", {
                method: "POST",
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.result) {
                        localStorage.setItem('address', true);
                        dispatch({
                            type: FETCH_EVENTDETAIL,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }

                })
                .catch(error => {
                    //console.log("error" + JSON.stringify(error));
                });
        })
    };
};

export const EventDetail = (id) => {
    return dispatch => {
        const body = {
            "eventid": id
        };
        fetch("https://admin.urbandmusic.com/api/eventdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: EVENTDETAIL,
                    value: res
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};

export const fetcheventtickets = (id) => {
    return dispatch => {
        const body = {
            "eventid": id
        };

        fetch("https://admin.urbandmusic.com/api/eventdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_EVENTTICKET,
                    value: res
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};

export const previousshow = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch("https://admin.urbandmusic.com/api/previousshow", {
                method: "POST"
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: PREVIOUSSHOW,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }


                })
                .catch(error => {
                    //console.log("error" + JSON.stringify(error));
                });
        })
    };
};
export const spotlight = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch("https://admin.urbandmusic.com/api/spotlight", {
                method: "POST"
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: FETCH_SPOTLIGHT,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }

                })
                .catch(error => {
                    //console.log("error" + JSON.stringify(error));
                });
        })
    };
};

export const fetchMenues = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch("https://admin.urbandmusic.com/api/menues", {
                method: "POST"
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {
                        dispatch({
                            type: FETCH_MENUES,
                            value: res.result
                        });
                        resolve()
                    } else {
                        reject(res)
                    }

                })
                .catch(error => {
                    console.log("error :" + JSON.stringify(error));
                });
        });
    };
};

export const bookTicket = (state) => {
    return () => {
        return new Promise((resolve, reject) => {
            const body = {
                "token": urbandtoken,
                "eventid": state.eventid,
                "packageid": state.ticketid,
                "quantity": state.totalPerson,
                "total": state.grandTotal,
                "payment_option": "",
                "price": state.ticketPrice
            };

            fetch("https://admin.urbandmusic.com/api/eventbooking", {
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
                    reject(error)
                });
        })
    };
};



