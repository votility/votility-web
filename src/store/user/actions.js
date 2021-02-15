import Web3 from 'web3';

export default {
  disconnectFromMetaMask({ commit }) {
    commit('setIsConnected', false);
    commit('setAccount', '');
  },

  markProposal({ commit }, { proposalId, marked }) {
    commit('markProposal', { proposalId, marked });
  },

  async connectToMetaMask({ commit }) {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      window.ethereum.on('accountsChanged', (accounts) => {
        commit('setIsConnected', true);
        commit('setAccount', accounts[0])
      });
      
      window.ethereum.on('networkChanged', (networkId) => {
        window.location.reload();
      });

      ethereum.on('disconnect', () => {
        commit('setIsConnected', false);
        commit('setAccount', null);
      });
      
      try {
        const accounts = await window.ethereum.enable();

        // await window.ethereum.request({
        //   method: "wallet_requestPermissions",
        //   params: [
        //     {
        //       eth_accounts: {}
        //     }
        //   ]
        // });
        
        commit('setIsConnected', true);
        commit('setAccount', accounts[0]);
      } catch (e) {
        commit('setIsConnected', false);
        commit('setAccount', '');
      }
    } else {
      commit('setIsConnected', false);
      commit('setAccount', '');
    }
  },
}
