import axios from "axios";

const instance = () => {
  return axios.create({ baseURL: "http://localhost:4000" });
};

export default instance;
