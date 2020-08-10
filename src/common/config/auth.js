import { setHeaderToken } from './axiosConfig'
const TOKEN_KEY = "merqata_token";
const USER_DATA = "merqata_user_data";

export const setToken = (token) => {
  setHeaderToken(token)
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const destroyToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const setUserData = (data) => {
  localStorage.setItem(USER_DATA, data);
};

export const getUserData = () => {
  return localStorage.getItem(USER_DATA);
};

export const destroyUserData = () => {
  localStorage.removeItem(USER_DATA);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY) && localStorage.getItem(USER_DATA)) {
    return true;
  }
  return false;
};