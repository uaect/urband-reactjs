import {
  CONTACTUS,
  FOUNDED,
  REGISTER,
  LOGIN,
  GETSOCIAL,
  GETADDRESS,
  ADDADDRESS,
  GETEMIRATES,
  SUBSCRIBE,
  GETEMIRATES1,
  REMOVEADDRESS,
  GETUSER,
  GETORDEREDLIST
} from "./types";
import ApiService from "../../common/config/axiosConfig";
var urbandtoken = JSON.parse(localStorage.getItem("urbandtoken"));


export const register = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        name: params.firstname,
        lastname: params.lastname,
        email: params.email,
        password: params.password,
        mobile: params.mobile,
        city: params.city
      };
      ApiService.post("api/register", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: REGISTER,
              value: res
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
};

export const login = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        type: params.loginType ? params.loginType : "manual",
        email: params.email,
        password: params.password ? params.password : "",
        firstname: params.firstname ? params.firstname : "",
        lastname: params.lastname ? params.lastname : "",
        logo: params.logo ? params.logo : "",
        token: params.token ? params.token : ""
      };
      ApiService.post("api/login", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            localStorage.setItem("urbandtoken", JSON.stringify(res.token));
            localStorage.setItem("urbandData", JSON.stringify(res.user));
            dispatch({
              type: LOGIN,
              value: res
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
};
export const getsocial = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      ApiService.post("api/social")
        .then(res => res.json())
        .then(res => {
          //console.log(res);
          if (res.success) {
            dispatch({
              type: GETSOCIAL,
              value: res.result
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};
export const getaddress = params => {
  localStorage.removeItem("address");
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        token: urbandtoken
      };
      ApiService.post("api/address", body)
        .then(res => res.json())
        .then(res => {
          //console.log(res);
          if (res.success) {
            localStorage.setItem("address", true);
            dispatch({
              type: GETADDRESS,
              value: res.result
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};
export const getemirates = id => {
  return dispatch => {
    const body = {
      id: id
    };
    ApiService.post("api/countries", body)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: GETEMIRATES,
          value: res.result
        });
      })
      .catch(error => { });
  };
};

export const getemirates1 = id => {
  return dispatch => {
    const body = {
      id: id
    };
    ApiService.post("api/countries", body)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: GETEMIRATES1,
          value: res.result
        });
      })
      .catch(error => { });
  };
};

export const addaddress = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        token: urbandtoken,
        type: params.type,
        first_name: params.first_name,
        last_name: params.last_name,
        mobile: params.mobile,
        phone: params.phone,
        emirate: params.emirate,
        latitude: "1",
        longitude: "1",
        area: params.area,
        street: params.street
      };
      ApiService.post("api/addaddress", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: ADDADDRESS,
              value: res
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};

export const deleteaddress = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        token: urbandtoken,
        addressid: params
      };
      ApiService.post("api/removeaddress", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: REMOVEADDRESS,
              value: res
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};

export const getuser = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        token: urbandtoken
      };
      ApiService.post("api/getuser", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: GETUSER,
              value: res.result
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};

export const edituser = params => {
  //console.log(params);

  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        token: urbandtoken,
        name: params.name,
        email: params.email
      };
      ApiService.post("api/edituser", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};

export const getorderedlist = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        token: urbandtoken
      };
      ApiService.post("api/getorderedlist", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: GETORDEREDLIST,
              value: res
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};

export const subscribe = email => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        email: email.email
      };
      ApiService.post("api/subscribe", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: SUBSCRIBE,
              value: res
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};

export const aboutfounded = email => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      ApiService.post("api/founded")
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: FOUNDED,
              value: res.result
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};
export const contactus = email => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const body = {
        email: email.email,
        name: email.name,
        message: email.message
      };
      ApiService.post("api/contact_us", body)
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            dispatch({
              type: CONTACTUS,
              value: res.result
            });
            resolve();
          } else {
            reject(res);
          }
        })
        .catch(error => { });
    });
  };
};
