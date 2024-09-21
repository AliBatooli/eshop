import axios from "axios";
import server from "../config/ServerConfig.json";

export const Get = (url) => {
  return axios.get(`${server.serverAddress}${url}`);
};

export const Post = (url, body) => {
  return axios.post(`${server.serverAddress}${url}`, body, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
