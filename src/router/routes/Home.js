import { lazy } from 'react'

const HomeRoutes = [
  
  {
    path: '/home',
    component: lazy(() => import('../../views/pages/home/home')),
    layout: 'BlankLayout'
  }

]

export default HomeRoutes