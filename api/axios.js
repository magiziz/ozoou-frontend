import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3001/oozou`,
});

export default instance;
