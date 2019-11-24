import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
        },
        {
            path: '/operating/:tab',
            name: 'operating',
            component: () => import(/* webpackChunkName: "about" */ './views/Operating.vue')
        },
        {
            path: '/settle',
            name: 'settle',
            component: () => import(/* webpackChunkName: "about" */ './views/Settle.vue')
        },
        {
            path: '/data',
            name: 'data',
            component: () => import(/* webpackChunkName: "about" */ './views/Data.vue')
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import(/* webpackChunkName: "about" */ './views/Setting.vue')
        },
        {
            path: '/404',
            name: '404',
            component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
        }
    ]
})
