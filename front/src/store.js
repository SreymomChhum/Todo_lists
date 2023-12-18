import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
        {
            id: 1,
            title: 'SMS Gateway',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgefAcKOFCHnKzX0yKivWq-6IjqcwCQmU0ES45NnBMD4O1A6mT-ts34lZ7be3VX2b8vo&usqp=CAU',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
        },
        {
            id: 2,
            title: '3CX Call Center',
            image: 'https://www.3cx.com/wp-content/uploads/2020/06/virtual-contact-center-agents-working.jpg',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
        },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})