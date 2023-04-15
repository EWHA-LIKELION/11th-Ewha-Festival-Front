import axios from "axios";

export const http = axios.create({
  baseURL: "http://3.37.131.250",
  contentType: "application/json; charset=utf-8;",
});

http.defaults.withCredentials = true;

// const token = JSON.parse(localStorage.getItem("token")) ?? false;
const token = localStorage.getItem("token") ?? false;

http.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;