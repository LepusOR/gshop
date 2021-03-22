import axios from 'axios'
import qs from 'qs'
import router from '../router'

const instance = axios.create({
    baseURL:'api'
})

instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    
    if(config.headers.needToken){
        let token = localStorage.getItem('token_key')
        if(token){
            config.headers.authorization = token
        }else{
            throw Error('请先登录')
        }
    }
    return config
})

instance.interceptors.response.use(
    response => response.data,
    error => {
        console.log(error.message);
        if(!error.response){
            alert('请先登录')
            if(router.currentRoute.path !== '/login'){
                router.replace('/login')
            }
        }else{
            if(error.response.status === 401){
                alert('token过期，重新登录')
                if(router.currentRoute.path !== '/login'){
                    router.replace('/login')
                }
            }else if(error.response.status === 404){
                alert('请求资源未找到')
            }else{
                alert('请求错误')
            }
        }
        return new Promise(()=>{})
    }
)

export default instance