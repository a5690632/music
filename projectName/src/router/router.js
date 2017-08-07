import Vue from 'vue';

import Router from 'vue-router';


import content from "components/content/content.vue"
import index from "components/index/index.vue"
import rank from "components/ranking/rank"
import list from "components/list/list"

Vue.use(Router);

 export default  new Router ({
   linkActiveClass: 'active',
    routes:[
    {     
        path:'/content',
        component: content,
        children:[
            {
                path:"/content/index",
                 component: index,
            },
            {
                path:"/content/list",
                 component: list,
            },
            {
                path:"/content/rank",
                 component: rank,
            },

        ]
    }



]


})