import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Responsive from './Responsive.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faExpand, faSearch, faInfoCircle, faArrowsAltV } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// font awesome icon library
library.add(fas, fab, faExpand, faSearch, faInfoCircle, faArrowsAltV, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Integrate with Vue-Router
Vue.use(VueRouter)
// Router configuration
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '*', // Wildcard path
    component: Responsive,
    // props based on get query parameters
    props: (route) => ({
      url: route.query.url,
      scroll: route.query.scroll
    })
  }]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
