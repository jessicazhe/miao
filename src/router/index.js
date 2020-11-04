import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './Movie'
import mineRouter from './Mine'
import cinemaRouter from './Cinema'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path:'/*',
      redirect : '/Movie'
      // 找不到路由时将其匹配到首页
    }
  ]
})

// // const routes = [
// //   {
// //     path: '/',
// //     name: 'Home',
// //     component: Home
// //   },
// //   {
// //     path: '/about',
// //     name: 'About',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// //   }
// // ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes:[
//     movieRouter,
//   ]
// })

// export default router
