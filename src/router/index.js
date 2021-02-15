import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/SimpleLayout.vue'),
  children: [{
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "starter-page" */ '@/pages/StarterPage.vue')
  },
  {
    path: '/blog/learn-more',
    name: '/blog/learn-more',
    component: () => import(/* webpackChunkName: "/blogs/learn-more" */ '@/pages/Blog/LearnMore.vue')
  },
  {
    path: '/blog/treasury-management',
    name: '/blog/treasury-management',
    component: () => import(/* webpackChunkName: "/blogs/learn-more" */ '@/pages/Blog/TreasuryManagement.vue')
  }
  ]
},
{
  path: '/proposals',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/DefaultLayout.vue'),
  children: [{
    path: '/proposals',
    name: '/proposals',
    component: () => import(/* webpackChunkName: "admin" */ '@/pages/Proposals.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '@/pages/Admin.vue')
  },
  {
    path: '/proposals/new',
    name: '/proposals/new',
    component: () => import(/* webpackChunkName: "admin" */ '@/pages/NewProposal.vue')
    },
    
  {
    path: '/proposals/:id/:tab',
    name: '/proposals/:id/:tab',
    component: () => import(/* webpackChunkName: "admin" */ '@/pages/Proposal.vue')
  },
  {
    path: '/proposals/:id',
    name: '/proposals/:id',
    component: () => import(/* webpackChunkName: "admin" */ '@/pages/Proposal.vue')
  }]
}
  , {
  path: '*',
  component: () => import(/* webpackChunkName: "layout-error" */ '@/layouts/ErrorLayout.vue'),
  children: [{
    path: '',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue')
  }]
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
