import axios from 'axios';



const Axiosinstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    maxBodyLength: Infinity,

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