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
      icon: 'lock'
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
    meta: { title: 'managework', icon: 'shopping' },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/manage/index'),
        meta: {
          title: 'manageindex',
          icon: 'shopping',
          perms: ['POST /api/v1/manager/list']
        }
      },
      {
        path: 'area/:id(\\d+)',
        component: () => import('@/views/manage/area'),
        name: 'area',
        meta: {
          title: 'area',
          noCache: true,
          activeMenu: '/manage/index',
          perms: ['POST /api/v1/manager/list']
        },
        hidden: true
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    redirect: 'member',
    alwaysShow: true,
    name: 'userManage',
    meta: { title: 'member', icon: 'peoples' },
    children: [
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/member/role'),
        meta: {
          title: 'grouplist',
          noCache: true,
          perms: ['POST /api/v1/auth_rule/list']
        }
      },
      {
        path: 'grouplist',
        name: 'grouplist',
        component: () => import('@/views/member/grouplist'),
        meta: {
          title: 'branchlist',
          noCache: true,
          perms: ['POST /api/v1/branch/list']
        }
      },
      {
        path: 'memberlist',
        name: 'memberlist',
        component: () => import('@/views/member/memberlist'),
        meta: {
          title: 'memberlist',
          noCache: true,
          perms: ['POST /api/v1/manager/list']
        }
      }
    ]
  },
  // tableRouter,
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
