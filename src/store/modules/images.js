import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
  // allImages: (state) => {
  //   return state.images;
  // }
};

const actions = {
  async fetchImages({ rootState, commit }) {
    //api.fetchImages(rootState.auth.token);
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    //commit
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await api.uploadImages(images, token);
    router.push('/');
  }
};

const mutations = {
  // setImages: function (state, images) {
  //   state.images = images;
  // }
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
