import axios from "axios";
//import logger from "./logService";
//import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:4000/api"; ///process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
  const expecedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expecedError) {
    console.log("Error log:" + error);
    // logger.log("Error log: " + error);  //TODO make working logger
    // toast.error("An unexpected error occurred");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
