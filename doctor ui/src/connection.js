import axios from "axios";

 const connection = axios.create({
    baseURL: "http://localhost:9000",
  });
  
export default connection;