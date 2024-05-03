import {backendIP,getJsonHeadersWithJWT} from "./properties";

let getTasksByUserId = (id) => {
    return axios.get(`${backendIP}/api/tasks/calendar/${id}`);
    //, {
       // headers: getJsonHeadersWithJWT()，
   // }
}

export{getTasksByUserId};