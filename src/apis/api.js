import axios from './query'

const baseUrl = '';

//数据请求接口  向外暴露
// 登录
export const loginApi = function(params){
    return axios.post(`${baseUrl}/login`, params).then(function (response) {
        return response.data;
    });
}
