import { 
    getShopDatas 
} from '../../api'

import {
    SAVE_SHOPDATAS
} from '../mutations-type'


const state = {
    init:'555',
    shopDatas:{}
}


const mutations = {
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas = shopDatas
    }
}


const actions = {
    async getShopDatasAction({commit}){
        let result = await getShopDatas()
        if(result.code === 0){
            commit(SAVE_SHOPDATAS,result.data)
        }
    }
}


const getters = {
    
}



export default {
    state,
    mutations,
    actions,
    getters
}