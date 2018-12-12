import * as types from '../types.js'
// state
const state = {
    loading: false,
};
// action
const actions = {
    showLoading({ commit }, status) {
        commit(types.SHOW_LOADING, status)
    },
};
// getters
const getters = {
    // loading: state => state.loading,
};
// mutations
const mutations = {
    [types.SHOW_LOADING] (state,status){
        state.loading = status;
    },
};

export default{
    state,
    actions,
    getters,
    mutations
}
