import {
    getAddress,
    getCategory
} from '../api'


import {
    SAVE_ADDRESS, SAVE_CATEGORY
} from './mutations-type'



export default{

    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        /* if(result.code === 0){
            commit(SAVE_ADDRESS,result.data)
        } */
        result.code === 0 && commit(SAVE_ADDRESS,result.data)
    },
    async getCategoryAction({commit}){
        let result = await getCategory()
        result.code === 0 && commit(SAVE_CATEGORY,result.data)
    }
}