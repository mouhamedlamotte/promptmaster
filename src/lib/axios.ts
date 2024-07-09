import axios from 'axios';
import { getCookie } from 'cookies-next';



const Axiosinstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    maxBodyLength: Infinity,
    headers: { 
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMDQ0MTUwMCwianRpIjoiNTlkOWZjMGUtNzc3MS00M2RjLWE1YTEtZTA5ZjQwZmI4ZjNiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluQGdtYWlsLmNvbSIsIm5iZiI6MTcyMDQ0MTUwMCwiY3NyZiI6ImZkZWMwMzIwLTIyNDctNGRkYS1iNzAxLTEyYTY2YzQ2NzVlYSIsImV4cCI6MTcyMDUyNzkwMH0.zCKgiECSSw9EIje8sUVqYyRFXrCN-bpeua3ZQmke15s'
    }
  });

// Axiosinstance.interceptors.request.use(function (config) {
//   const token = getCookie("token");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//     console.log("headers",config.headers);
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

export default Axiosinstance;