import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        number: 0
    },
    getters:{
        number1(state){
            return state.number
        }
    },
    mutations:{
        addCount2(state){
            state.number++
        },
        subCount2(state){
            state.number--
        }
    },
    actions:{
        addCount3(context){
            context.commit('addCount2')
        },
        subCount3(context){
            context.commit('subCount2')

        }
    }

});
