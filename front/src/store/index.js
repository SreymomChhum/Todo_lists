import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      posts: []
    }
  },

  getters: {
    getAll(state) {
      state.posts
    },

    getOneService: (state) => (id) => {
      return state.posts.find((user) => user.id === id)
    }
  },

  mutations: {
    LOAD_DATA(state, data) {
      state.posts = data
    },

    CREATE_DATA(state, user) {
      state.posts.push(user)
    },

    EDIT_DATA(state, { index, user }) {
      state.posts[index] = user
    },

    DELETE_DATA(state, index) {
      state.posts.splice(index, 1)
    }
  },

  actions: {
    async loadData({ commit }) {
      try {
        const response = await axios.get('http://127.0.0.1:5000/users')
        commit('LOAD_DATA', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async createData({ commit }, user) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/users', user)
        console.log("created")
        commit('CREATE_DATA', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async editData({ commit }, user) {
      try {
        const response = await axios.put(`http://127.0.0.1:5000/users`, user)
        console.log("edited")
        commit('EDIT_DATA', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    // async editData({ commit }, id, user) {
    //   try {
    //     const response = await axios.put(`http://127.0.0.1:5000/users/${id}`, user);
    //     console.log("edited");
    //     commit('EDIT_DATA', response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    
    // fetchUpdateStatus({ commit }, payload) {
    //   axios.patch('http://127.0.0.1:5000/tasks', { "id": payload.id, "status": !payload.status})
    //     .then((res) => {
    //       if(res.status === 200) {
    //         commit('UPDATE_STATUS', payload.index)
    //       }
    //     })
    // },

    
    async deleteData({ commit }, params) {
      axios.delete(`http://127.0.0.1:5000/users/`+ params.id).then((res)=> {
        commit('DELETE_DATA');
        console.log(res)
      })
    }
  }
})

export default store
