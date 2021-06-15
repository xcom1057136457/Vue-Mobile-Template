const MutationType = {
  SETUSERCONFIG: 'SETUSERCONFIG',
  SETTOKEN: 'SETTOKEN'
};

export default {
  state: {
    userConfig: {},
    token: sessionStorage.getItem('token')
  },
  getters: {
    userConfig: state => state.userConfig
  },
  mutations: {
    [MutationType.SETUSERCONFIG](state,data){
      state.userConfig = data
    },
    [MutationType.SETTOKEN](state){
      sessionStorage.setItem('token','tokenId')
    }
  },
  actions: {
    getUserConfig({ commit },data){
      let userConfig = {
        userName: data.username,
        permission: 'admin',
      }
      commit(MutationType.SETUSERCONFIG,userConfig);
      commit(MutationType.SETTOKEN);
    }
  }
}