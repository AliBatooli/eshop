import server from "../config/ServerConfig.json";

export const Get = (url) => {
  return fetch(`${server.serverAddress}${url}`);
};
