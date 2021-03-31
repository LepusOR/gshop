import Vue from 'vue'
import { 
    getShopDatas 
} from '../../api'

import {
    SAVE_SHOPDATAS,
    ADD_FOOD_COUNT,
    DEL_FOOD_COUNT,
    CLEAR_CARTSHOPS
} from '../mutations-type'


const state = {
    init:'555',
    shopDatas:{},
    cartShops:[]
}


const mutations = {
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas = shopDatas
    },
    [ADD_FOOD_COUNT](state,{food}){
        if(food.count > 0){
            food.count++
        }else{
            Vue.set(food,'count',1)
            state.cartShops.push(food)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if(food.count > 0){
            food.count--
            if(food.count ===0){
                state.cartShops.splice(state.cartShops.indexOf(food),1)
            }
        }
    },
    [CLEAR_CARTSHOPS](state){
        state.cartShops.forEach(food => food.count = 0)
        state.cartShops = []
    }
}


const actions = {
    async getShopDatasAction({commit}){
        let result = await getShopDatas()
        if(result.code === 0){
            commit(SAVE_SHOPDATAS,result.data)
        }
    },
    async changeFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(DEL_FOOD_COUNT,{food})
        }
    }
}


const getters = {
    /* cartShops(state){
        return state.shopDatas.goods.reduce((pre,good)=>{
            pre.push(...good.foods.filter(fooo => food.count>0))
            return pre
        },[])
    } */
    totalCount(state){
        return state.cartShops.reduce((pre,food)=>{
            return pre += food.count
        },0)
    },
    totalPrice(state){
        return state.cartShops.reduce((pre,food)=>{
            return pre += food.count * food.price
        },0)
    }
}



export default {
    state,
    mutations,
    actions,
    getters
}