import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
import rotas from './../app/index.js'

export default new Router({
  routes: [
    ...rotas
  ]
})