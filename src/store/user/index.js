import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const markedProposals = localStorage.getItem('markedProposals');

const state = {
  isConnected: false,
  account: '',
  markedProposals: markedProposals ? JSON.parse(markedProposals) : {},
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
