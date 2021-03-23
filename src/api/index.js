import ajax from './ajax'




export const getAddress = (latitude,longitude) => ajax({
    url:`/position/${latitude},${longitude}`
})


export const getCategory = () => ajax({
    url:'/index_category',
    headers:{
        needToken:true
    }
})


export const getShopList = (latitude,longitude) => ajax({
    url:'/shops',
    params:{
        latitude,
        longitude
    },
    headers:{
        needToken:true
    }
})


export const sendCode = ({phone}) => ajax({
    url:'/sendcode',
    params:{
        phone
    }
})


export const loginWithUsername = ({username,pwd,captcha}) => ajax({
    url:'/login_pwd',
    method:'POST',
    data:{
        name:username,
        pwd,
        captcha
    },
    headers:{
        needToken:false
    }
})


export const loginWithPhone = ({phone,code}) => ajax({
    url:'/login_sms',
    method:'POST',
    data:{
        phone,
        code
    }
})


export const autoLogin = () => ajax({
    url:'/auto_login',
    headers:{
        needToken:true
    }
})


export const test = () => ajax('/test')



export const getShopDatas = () => ajax({
    url:'/getShopDatas'
})