import {
    getAddress,
    getCategory,
    getShopList
} from '../api'


import {
    SAVE_ADDRESS, 
    SAVE_CATEGORY,
    SAVE_SHOPLIST
} from './mutations-type'



export default{

    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        /* if(result.code === 0){
            commit(SAVE_ADDRESS,result.data)
        } */
        result.code === 0 && commit(SAVE_ADDRESS,result.data)
    },
    async getCategoryAction({commit},fn){
        let result = await getCategory()
        if(result.code === 0){
            commit(SAVE_CATEGORY,result.data)
            typeof fn === 'function' && fn()
        }
    },
    async getShopListAction({commit}){
        let result = await getShopList(40.10038,116.36867)
        result.code === 0 && commit(SAVE_SHOPLIST,result.data)
    }
}