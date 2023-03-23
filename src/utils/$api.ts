import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const runtime = useRuntimeConfig();
    config.baseURL = runtime.public.apiBase;

    // don't intercept if the request is for the login and newAccessToken
    return config;
  },
  function (error) {
    // Do something with request error

    if (error.config) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const config = error.config as AxiosRequestConfig;
    }

    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.config && error.response) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const config = error.config as AxiosRequestConfig;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = error.response as AxiosResponse;
    }

    return Promise.reject(error);
  }
);
export default instance;
