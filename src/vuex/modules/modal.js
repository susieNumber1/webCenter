import * as types from '../types.js'
// state
const state = {
  modalShow: false,
  modalTitle: "",
  modalMsg: "",
  modalConfirm: null,
  modalCancel: null,
  showCancel: false,
};
// action
const actions = {
  showModal({ commit }, status) {
    commit(types.SHOW_MODAL, status)
  },
};
// getters--filter
const getters = {

};
// mutations
const mutations = {
  [types.SHOW_MODAL] (state,{modalShow,modalTitle,modalMsg,modalConfirm,modalCancel,showCancel}){
    state.modalShow = modalShow;
    showCancel ? state.showCancel= true : state.showCancel = false;
    modalTitle ? state.modalTitle = modalTitle : state.modalTitle = "";
    modalMsg ? state.modalMsg = modalMsg : state.modalMsg = "";
    modalConfirm ? state.modalConfirm = modalConfirm : state.modalConfirm = null;
    modalCancel ? state.modalCancel = modalCancel : state.modalCancel = null;
  },
};

export default{
  state,
  actions,
  getters,
  mutations
}
