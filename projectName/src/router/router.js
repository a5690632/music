import Vue from 'vue';

import Router from 'vue-router';


import content from "components/content/content.vue"
import search from "components/search/search"

Vue.use(Router);

export default new Router({

    routes: [{
            path: "/",
            redirect: '/content'

        },
        {

            path: '/content',
            component: content,


        }, {
            path: "/search",
            component: search,

        }



    ]


})