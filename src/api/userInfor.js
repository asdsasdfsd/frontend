//以后用Spring Security加身份验证的话可能要用到，先放着了
const getUserinfoFromLocal = () => {
    let userinfo = JSON.parse(localStorage.getItem("scs_userinfo"));
    return userinfo;
};

export{getUserinfoFromLocal};