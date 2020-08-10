import axios from "axios";
// import { getToken } from "./auth";

const ApiService = axios.create({
  baseURL: "http://happiness-spinner.com/",
  headers: {
    "Content-type": "application/json",
    // Authorization: "Bearer " + getToken(),
  },
});

// export const setHeaderToken = (token) => {
//   ApiService.defaults.headers["Authorization"] = "Bearer " + token;
// };

// Request interceptor
ApiService.interceptors.response.use(null, (error) => {
  // if (error.response.status == 403) {
  //   window.location.href = `/forbidden`;
  // } else if (error.response.status == 404) {
  //   window.location.href = `/notfound404`;
  // } else if (error.response.status == 500) {
  //   window.location.href = `/unexpected-error`;
  // } else if (error.response.status == 503) {
  //   window.location.href = `/service-unavailable`;
  // }
  // return Promise.reject(error);
});

// Response interceptor
// ApiService.interceptors.response.use(
//   response => response,
//   error => new Error(error)
// );

export default ApiService;
