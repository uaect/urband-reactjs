import {FETCH_ALBUMS, FETCH_ALBUMSDETAILS, FETCH_GALLERYCATEGORY} from "./types";

export const fetchAlbums = () => {
    return dispatch => {
        const body = {
            page: 1
        };
        fetch("http://admin.urbandmusic.com/api/albums", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_ALBUMS,
                    value: res
                });
            })
            .catch(error => {
            });
    };
};

export const fetchAlbumsDetails = (id) => {
    return dispatch => {
        const body = {
            albumid: id
        };
        fetch("http://167.71.231.3/api/albumdetails", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: FETCH_ALBUMSDETAILS,
                    value: res.result
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};

export const fetchgallerycategory = () => {
    return dispatch => {
        const body = {
            "page":"1"
        };
        fetch("http://167.71.231.3/api/gallerycategory", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log("res", res);
                
                dispatch({
                    type: FETCH_GALLERYCATEGORY,
                    value: res.result
                });
            })
            .catch(error => {
                console.log("error" + JSON.stringify(error));
            });
    };
};
