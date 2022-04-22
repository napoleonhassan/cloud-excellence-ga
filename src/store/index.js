import { createStore } from 'vuex'
import { postPass } from '@/services/authService'
import { getContent, postContent } from '@/services/contentService'

export default createStore({
  state: {
    authorized: false,
    form: [
      {
        id: 1,
        title: 'Body header 1',
        text: 'We code the future'
      }, {
        id: 2,
        title: 'Body content 1',
        text: 'We are digital software professionals who help you with expertise in software development, app development, BI and cloud solutions'
      }, {
        id: 3,
        title: 'Offering header 1',
        text: 'We are experts in software development'
      }, {
        id: 4,
        title: 'Offering body 1',
        text: 'Our developers and software architects are constantly updated on the very latest platforms, software development environments and techniques.'
      }, {
        id: 5,
        title: 'Offering header 2',
        text: 'We are experts in business development'
      }, {
        id: 6,
        title: 'Offering body 2',
        text: 'Through business development we analyze, do trainings, coach and challenge existing working methods to optimize the business and your services.'
      }, {
        id: 7,
        title: 'Offering header 3',
        text: 'We know applied Artificial Intelligence\nWe can help you apply Machine Learning and Data Science into your business'
      }
    ]
  },
  getters: {
    form: (state) => state.form,
    authorized: (state) => state.authorized
  },
  mutations: {
    setForm (state, payload) {
      state.form = payload
    },
    setAuthorized (state, payload) {
      state.authorized = payload
    }
  },
  actions: {
    sendPass ({ commit }, payload) {
      // ToDo: REMOVE
      commit('setAuthorized', true)
      postPass(payload)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log('failed login', error)
        })
        .finally(() => {
          console.log('postPass ended')
        })
    },
    fetchContent ({ commit }, payload) {
      getContent(payload)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log('failed get content', error)
        })
        .finally(() => {
          console.log('getContent ended')
        })
    },
    sendContent ({ commit }, payload) {
      postContent(payload)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log('failed post content', error)
        })
        .finally(() => {
          console.log('postContent ended')
        })
    },
    setAuthorized ({ commit }, payload) {
      commit('setAuthorized', payload)
    }
  }
})
