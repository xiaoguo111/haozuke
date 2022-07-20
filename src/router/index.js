import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
    children: [
      {
        path: '/ ',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'zixun',
        name: 'zixun',
        component: () => import('@/views/Zixun')
      },
      {
        path: 'zhaofang',
        name: 'zhaofang',
        component: () => import('@/views/Zhaofang')
      },
      {
        path: 'myde',
        name: 'myde',
        component: () => import('@/views/Myde')
      }
    ]
  },
  {
    path: '/shoucang',
    // name: 'shoucang',
    component: () => import('@/qiantao/Shoucang')
  },
  {
    path: '/chuzu',
    component: () => import('@/qiantao/Chuzu')
  },
  {
    path: '/quchuzu',
    component: () => import('@/qiantao/Quchuzu')
  },
  {
    path: '/city',
    component: () => import('@/qiantao/City')
  }
]

const router = new VueRouter({
  routes
})

export default router
