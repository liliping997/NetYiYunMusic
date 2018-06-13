import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import Music from "./module/music"


export default new Vuex.Store({
    modules:{
        music:Music
    }
})