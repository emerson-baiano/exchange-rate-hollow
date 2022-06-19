import axios from "axios";

export default axios.create({
  baseURL: "https://api.exchangerate.host",
  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});
