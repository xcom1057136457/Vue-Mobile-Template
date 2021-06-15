import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import actList from '../views/actList'
import error from '../views/error.vue'
import active from '../views/frame/active.vue'
import information from '../views/frame/information.vue'
import prizeList from '../views/prizeList/index'
import posterList from '../views/posterList/index.vue'
import logistics from '../views/logistics/index.vue'

Vue.use(VueRouter)

/**
 * foot: 开启底部导航栏
 * keppAlive: 是否开启界面缓存 
 * title: 标题
 */
const routes = [
  {
    redirect: '/active',
    path: '/'
  },
  {
    path: '*',
    redirect: '/error'
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      keepAlive: false,
      foot: false,
      title: '登录页'
    }
  },
  {
    path: '/active',
    name: 'active',
    component: active,
    meta: {
      keepAlive: false,
      foot: true,
      title: '活动主页'
    }
  },
  {
    path: '/information',
    name: 'information',
    component: information,
    meta: {
      keepAlive: false,
      foot: true,
      title: '个人主页'
    }
  },
  {
    path: '/actList',
    name: 'actList',
    component: actList,
    meta: {
      keepAlive: false,
      foot: false,
      title: '活动列表'
    }
  },
  {
    path: '/prizeList',
    name: 'prizeList',
    component: prizeList,
    meta: {
      keepAlive: false,
      foot: false,
      title: '奖品列表'
    }
  },
  {
    path: '/posterList',
    name: 'posterList',
    component: posterList,
    meta: {
      keepAlive: false,
      foot: false,
      title: '海报列表'
    }
  },
  {
    path: '/logistics',
    name: 'logistics',
    component: logistics,
    meta: {
      keepAlive: false,
      foot: false,
      title: '物流信息'
    }
  },
  {
    path: '/error',
    name: 'error',
    component: error,
    meta: {
      keepAlive: false,
      foot: false,
      title: 'Error'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router