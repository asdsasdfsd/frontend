import {getUserinfoFromLocal} from "./userInfor";

//切换后端地址，以后部署到云端之后可以切换
export const backendIP = process.env.REACT_APP_BACKEND_IP
    ? process.env.REACT_APP_BACKEND_IP
    : "http://localhost:7079";

//以后用Spring Security加身份验证的话可能要用到，先放着了
export const getJsonHeadersWithJWT = () => {
    if (getUserinfoFromLocal() === null) {
        console.log("getUserinfoFromLocal() returned null. Please login first.");
        return;
    }
    return {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        Authorization: "Bearer " + getUserinfoFromLocal().jwt,
    };
};