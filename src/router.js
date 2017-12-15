import Vue from 'vue'
import Router from 'vue-router'
import DetailView from './views/detail.vue'
import IndexView from './views/index.vue'

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/details', name: 'details', component: DetailView },
      { path: '/', name: 'home', component: IndexView },
      { path: '*', redirect: '/' },
    ],
  });
}
