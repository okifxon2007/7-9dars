import axios from "axios";


const Axios = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "X-API-KEY": "5VG027W-AF1462B-GJ6MJH2-5G6QR8Q",
  },
});

Axios.interceptors.request.use(
  (config) => {
    console.log("Request started", config);
    return config;
  },
  (error) => {
    console.log("Request error", error);
    return Promise.reject(error);
  }
);


Axios.interceptors.response.use(
  (response) => {
    console.log("Response received", response);
    return response;
  },
  (error) => {
    console.log("Response error", error);
    toast.error("Failed to fetch data!");
    return Promise.reject(error);
  }
);

export default Axios;