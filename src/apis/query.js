import axios from 'axios'

//请求超时时间 是毫秒值
 axios.defaults.timeout = 18000

//添加一个请求拦截器   在真正发起请求之前配置信息
axios.interceptors.request.use(function (config) {
    // 只要不是登录请求，需要在请求头设置token
    if(true){
        let obj = JSON.parse(sessionStorage.getItem('Authorization'))
        let key = user.state.userName
        config.headers.common['Authorization'] = obj[key];
    };
     config.headers.post['Content-Type'] = 'application/json';
     return config;
  },function (error) {
    //如果请求错误了，就拒绝
    return Promise.reject(error);
  })
  
  
  //添加一个返回拦截器，  在真正返回数据前过滤 
  axios.interceptors.response.use(response => {
      // console.log(data)
       return response;
    },function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  export default axios