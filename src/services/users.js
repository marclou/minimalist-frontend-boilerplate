import axios from 'axios';
import { authHeader } from './header';
import config from '../config';

const API_URL = config.apiUrl + 'users/';

const getUsers = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const userService = {
  getUsers,
};

export default userService;
