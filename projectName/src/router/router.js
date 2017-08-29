import Vue from 'vue';

import Router from 'vue-router';


import content from "components/content/content.vue"
import search from "components/search/search"
import playlist from "components/playlist/playlist"
import ranklist from "components/ranking/ranklist"
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

        },
        {
            path: "/playLists/:id",
            component: playlist,

        },
        {
            path: '/rankLists/:id',
            component: ranklist,
        },





    ]


})