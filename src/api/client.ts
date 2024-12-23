import axios from 'axios';

import { store } from '../store';

export const HOST = 'http://127.0.0.1:8000';
export const BACKEND_URL = `${HOST}/api`;

export const axiosClient = axios.create({
  baseURL: BACKEND_URL
});

axiosClient.interceptors.request.use(function (config) {
  const { token } = store.getState().user;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
