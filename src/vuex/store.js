// store.js
//common
import Vue from 'vue'
import Vuex from 'vuex'
//module
import utils from './modules/utils.js'
import modal from './modules/modal.js'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        utils,
        modal,
    }
})
