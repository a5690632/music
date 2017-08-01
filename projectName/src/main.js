// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import content from "./components/content/content.vue"
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes=[
  {     
        path:'/content',
        component: content,

    }



]
const router = new VueRouter ({
   
routes


})



Vue.config.productionTip = false
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);
/* eslint-disable no-new */


new Vue({
  
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})