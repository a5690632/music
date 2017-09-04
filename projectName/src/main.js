// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from "./router/router"
import VueLazyload from "vue-lazyload"
import store from "./store/store"
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {

    error: '../static/Spinner.gif',
    loading: '../static/Spinner.gif',
    attempt: 2,
    listenEvents: [ 'scroll', 'mousewheel' ]
  })
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({

    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})