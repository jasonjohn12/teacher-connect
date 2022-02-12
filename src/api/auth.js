import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

export function loginUser(user) {
  return api.post(`api/auth/login`, user);
}
