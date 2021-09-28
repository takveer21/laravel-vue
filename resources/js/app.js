require('./bootstrap');
window.Vue = require('vue');

import Vuex from 'vuex'
Vue.use(Vuex)


import StoreData from './store'
const store = new Vuex.Store(
    StoreData
)

import VueRouter from 'vue-router'
Vue.use(VueRouter)



Vue.component('my-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/public/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/public/FooterComponent.vue').default);
Vue.component('master-component', require('./components/public/PublicMaster.vue').default);

import {routes} from './routes'

const router = new VueRouter({
    routes,
    mode: 'history'
})




var app = new Vue({
    el: '#app',
    router,
    store
});
