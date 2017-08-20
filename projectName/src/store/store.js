import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)



const store = new Vuex.Store({　
    state: {　　
        side: false,

    },

    mutations: {
        side(state, flag) {
            state.side = flag

        },


    },
    actions: {


    },


})




export default store