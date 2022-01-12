import axios from 'axios';
import config from '../config';

const API_URL = config.apiUrl + 'auth/';

const register = (name, email, password, tz) => {
  return axios.post(API_URL + 'register', {
    name,
    email,
    password,
    tz,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
      }

      return response.data;
    });
};

const refreshTokens = (refreshToken) => {
  return axios
    .post(API_URL + 'refresh-tokens', {
      refreshToken,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
      }

      return response.data;
    });
};

const logout = (refreshToken) => {
  return axios
    .post(API_URL + 'logout', {
      refreshToken,
    })
    .then((response) => {
      localStorage.removeItem('user');
      localStorage.removeItem('tokens');
    });
};

const authService = {
  register,
  login,
  refreshTokens,
  logout,
};

export default authService;
