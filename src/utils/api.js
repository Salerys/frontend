import axios from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '../utils/constants';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const csrftoken = Cookies.get('csrftoken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (csrftoken) {
      config.headers['X-CSRFToken'] = csrftoken; // CSRF token for protection
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
