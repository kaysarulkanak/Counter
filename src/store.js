import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        number: 0
    },
    getters:{
        number(state){
            return state.number
        }
    },
    mutations:{
        addCount(state){
            state.number++
        },
        subCount(state){
            state.number--
        }
    },
    actions:{
        addCount(context){
            context.commit('addCount')
        },
        subCount(context){
            context.commit('subCount')

        }
    }

});
