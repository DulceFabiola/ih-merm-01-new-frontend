//axios es un libreria para poder hacer llamadas API
//Postman de React
//npm install axios
//Para poder hacer peticiones al backend
import axios from "axios";
// baseURL con esta sintaxis
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
export default axiosClient;
