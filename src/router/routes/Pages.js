import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [

  
  {
    path: '/login',
    component: lazy(() => import('../../views/pages/authentication/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/login-v1',
    component: lazy(() => import('../../views/pages/authentication/LoginV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/login-v2',
    component: lazy(() => import('../../views/pages/authentication/LoginV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/register',
    component: lazy(() => import('../../views/pages/authentication/Register')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/register-v1',
    component: lazy(() => import('../../views/pages/authentication/RegisterV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/register-v2',
    component: lazy(() => import('../../views/pages/authentication/RegisterV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPassword')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/pages/forgot-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/forgot-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV2.js')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-v1',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/reset-password-v2',
    component: lazy(() => import('../../views/pages/authentication/ResetPasswordV2')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/profile',
    component: lazy(() => import('../../views/pages/profile'))
  },
  {
    path: '/pages/faq',
    component: lazy(() => import('../../views/pages/faq'))
  },
  {
    path: '/pages/knowledge-base',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBase'))
  },
  {
    path: '/pages/knowledge-base/:category',
    exact: true,
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategory')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/knowledge-base/:category/:question',
    component: lazy(() => import('../../views/pages/knowledge-base/KnowledgeBaseCategoryQuestion')),
    meta: {
      navLink: '/pages/knowledge-base'
    }
  },
  {
    path: '/pages/account-settings',
    component: lazy(() => import('../../views/pages/account-settings'))
  },
  {
    path: '/pages/blog/list',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/list'))
  },
  {
    path: '/pages/blog/detail/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/details')),
    meta: {
      navLink: '/pages/blog/detail'
    }
  },
  {
    path: '/pages/blog/detail',
    exact: true,
    component: () => <Redirect to='/pages/blog/detail/1' />
  },
  {
    path: '/pages/blog/edit/:id',
    exact: true,
    component: lazy(() => import('../../views/pages/blog/edit')),
    meta: {
      navLink: '/pages/blog/edit'
    }
  },
  {
    path: '/pages/blog/edit',
    exact: true,
    component: () => <Redirect to='/pages/blog/edit/1' />
  },
  {
    path: '/pages/pricing',
    component: lazy(() => import('../../views/pages/pricing'))
  },
  {
    path: '/misc/coming-soon',
    component: lazy(() => import('../../views/pages/misc/ComingSoon')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/not-authorized',
    component: lazy(() => import('../../views/pages/misc/NotAuthorized')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/maintenance',
    component: lazy(() => import('../../views/pages/misc/Maintenance')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/misc/error',
    component: lazy(() => import('../../views/pages/misc/Error')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // START STATIC ROUTE
  // Contact Route - it is a route for unauthenticated.
  {
    path: '/contact',
    component: lazy(() => import('../../views/pages/static/contact')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Documents Route
  {
    path: '/account/documents',
    component: lazy(() => import('../../views/pages/static/account-documents')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Footers Route
  {
    path: '/footer',
    component: lazy(() => import('../../views/pages/static/footer')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Friends Route
  {
    path: '/friends',
    component: lazy(() => import('../../views/pages/static/friends')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Messages Route
  {
    path: '/messages',
    component: lazy(() => import('../../views/pages/static/messages')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // My Events Route
  {
    path: '/my-events',
    component: lazy(() => import('../../views/pages/static/my-events')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Wallet Operations Route
  {
    path: '/operations',
    component: lazy(() => import('../../views/pages/static/operations')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Privacy Route
  {
    path: '/privacy',
    component: lazy(() => import('../../views/pages/static/privacy')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Wallet Transfer Route
  {
    path: '/transfer',
    component: lazy(() => import('../../views/pages/static/transfer')),
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Addresses for Order Route
  {
    path: '/account/store/addresses',
    component: lazy(() => import('../../views/pages/static/account-store-addresses')),
    exact: true,
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Order Address Create Personal Route
  {
    path: '/store/addresses/create/personal',
    component: lazy(() => import('../../views/pages/static/store-addresses-create-personal')),
    exact: true,
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  },
  // Order Address Create Company Route
  {
    path: '/store/account/store/addresses/create/company',
    component: lazy(() => import('../../views/pages/static/store-account-store-addresses-create-company')),
    layout: 'BlankLayout',
    exact: true,
    meta: {
      publicRoute: true
    }
  },
  // Order Address Create ONG Route
  {
    path: '/account/store/addresses/create/ong',
    component: lazy(() => import('../../views/pages/static/account-store-addresses-create-ong')),
    exact: true,
    layout: 'BlankLayout',
    meta: {
      publicRoute: true
    }
  }
]

export default PagesRoutes
