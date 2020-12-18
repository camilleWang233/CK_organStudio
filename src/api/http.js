// import axios from "axios";
const axios = require("axios");
const HOST_API = `http://192.168.0.248/`;
// 测试接口
// export const test = () => {
//   return axios
//     .get("https://api.coindesk.com/v1/bpi/currentprice.json")
//     .then((response) => {
//       console.log(response.json());
//     });
// };

// async dfdd(){
//     const res = await test();

// 2.获取登录状态
export const getCheckLogin = () => {
  return axios.get(`${HOST_API}user/checkLogin`).then((response) => {
    return response;
  });
};
// 3.登录接口
// 4.获取通用信息
// 5.登出接口

// 6.获取机构工作室信息
// 7.获取教师列表
// 10.作品列表
export const postProjectListByStudio = () => {
  return axios
    .post(`${HOST_API}project/listByStudioId?studioId=1`)
    .then((response) => {
      return response;
    });
};
