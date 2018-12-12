import store from '../../vuex/store.js'

// loading
export function showLoading(){
    store.dispatch('showLoading', true);
}
export function hideLoading(){
    store.dispatch('showLoading', false);
}
