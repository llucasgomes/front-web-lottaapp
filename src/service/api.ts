import axios from "axios";

export const API = axios.create({
  baseURL: 'https://api.lottaapp.com',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Permite cookies entre domínios
})