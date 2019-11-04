import { FETCH_POSTS, FETCH_CONTACT, FETCH_CLIENTS, FETCH_CLIENTSLIST, FETCH_EVENTLIST, FETCH_EVENTDETAIL } from "./types";

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
      
        fetch("https://admin.urbandmusic.com/api/aboutus", {
            method: "POST"
        })
            .then(res => res.json())
            .then(res =>  {
                dispatch({
                    type: FETCH_CONTACT,
                    value: res.result
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
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
                    value: res
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
                    value: res
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

export const fetchEventDetail = (id) => {
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
                    type: FETCH_EVENTDETAIL,
                    value: res
                });
            })
            .catch(error => {
                //console.log("error" + JSON.stringify(error));
            });
    };
};