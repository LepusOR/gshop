import ajax from './ajax'




export const getAddress = (latitude,longitude) => ajax({
    url:`/position/${latitude},${longitude}`
})


export const getCategory = () => ajax({
    url:'/index_category'
})