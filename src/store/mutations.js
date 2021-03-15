import {
    SAVE_ADDRESS,
    SAVE_CATEGORY,
    SAVE_SHOPLIST
} from './mutations-type'


export default{
    [SAVE_ADDRESS](state,address){
        state.address = address
    },
    [SAVE_CATEGORY](state,category){
        state.category = category
    },
    [SAVE_SHOPLIST](state,shopList){
        state.shopList = shopList
    }
}


