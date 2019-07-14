import axios from "axios";

const instance = axios.create({
  baseURL: "https://formula-test-api.herokuapp.com"
});

export default instance;
