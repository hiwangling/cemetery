import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

// import tableRouter from './modules/table'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authRedirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    hidden: true,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/index',
    name: 'managework',
    meta: { title: 'managework', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/manage/index'),
        meta: { title: 'manageindex', icon: 'list' }
      }
    ]
  },
  {
    path: '/sell',
    component: Layout,
    redirect: '/sell/schedulelist',
    name: 'managesell',
    meta: { title: 'managesell', icon: 'shopping' },
    children: [
      {
        path: 'schedulelist',
        name: 'schedulelist',
        component: () => import('@/views/sell/schedulelist'),
        meta: { title: 'schedulelist' }
      },
      {
        path: 'selllist',
        name: 'selllist',
        component: () => import('@/views/sell/selllist'),
        meta: { title: 'selllist' }
      }
    ]
  },

  {
    path: '/cemetery',
    component: Layout,
    redirect: '/cemetery/Gardenlist',
    name: 'cemetery',
    meta: { title: 'cemetery', icon: 'component' },
    children: [
      {
        path: 'gardenlist',
        name: 'gardenlist',
        component: () => import('@/views/cemetery/gardenlist'),
        meta: { title: 'gardenlist' }
      },
      {
        path: 'arealist',
        name: 'arealist',
        component: () => import('@/views/cemetery/arealist'),
        meta: { title: 'arealist' }
      },
      {
        path: 'cemeterylist',
        name: 'cemeterylist',
        component: () => import('@/views/cemetery/cemeterylist'),
        meta: { title: 'cemeterylist' }
      },
      {
        path: 'stylelist',
        name: 'stylelist',
        component: () => import('@/views/cemetery/stylelist'),
        meta: { title: 'stylelist' }
      },
      {
        path: 'typelist',
        name: 'typelist',
        component: () => import('@/views/cemetery/typelist'),
        meta: { title: 'typelist' }
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    redirect: '/member/memberlist',
    name: 'member',
    meta: { title: 'member', icon: 'peoples' },
    children: [
      {
        path: 'memberlist',
        name: 'memberlist',
        component: () => import('@/views/member/memberlist'),
        meta: { title: 'memberlist' }
      },
      {
        path: 'branchlist',
        name: 'branchlist',
        component: () => import('@/views/member/branchlist'),
        meta: { title: 'branchlist' }
      },
      {
        path: 'grouplist',
        name: 'grouplist',
        component: () => import('@/views/member/role'),
        meta: { title: 'grouplist' }
      }
    ]
  },
  // tableRouter,

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'tab', icon: 'tab' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
