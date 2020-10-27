import * as React from 'react'
import { RouteMap } from './types';

const Dashboard = React.lazy(() => import('../../view/pages/Dashboard'))

// const Login = React.lazy(() => import('../../view/pages/Login'))

// const Profile = React.lazy(() => import('../../view/pages/Profile'))
// const Settings = React.lazy(() => import('../../view/pages/Settings'))
// const Admin = React.lazy(() => import('../../view/pages/Admin'))

// const Page404 = React.lazy(() => import('../../view/pages/Page404'))

export enum Pages {
  DASHBOARD = 'DASHBOARD',
  // ADMIN = 'ADMIN',
  // USER = 'USER',
  // SETTINGS = 'SETTINGS',
  // LOGIN = 'LOGIN',
  // LOGOUT = 'LOGOUT',
  // PAGE_404 = 'PAGE_404',
}

export enum Sections {
  SIDEBAR,
  NAVBAR,
  NAVBAR_RIGHT
}

export const routes: RouteMap = {
  DASHBOARD: {
    url: '/',
    label: 'dashboard.title',
    icon: 'home',
    component: Dashboard,
    page: Pages.DASHBOARD,
    includeIn: [Sections.SIDEBAR],
    needAuthentication: true,
    disabled: true
  },
  // USER: {
  //   url: '/profile',
  //   label: 'user.title',
  //   icon: IconNames.USER,
  //   component: Profile,
  //   page: Pages.USER,
  //   includeIn: [Sections.NAVBAR_RIGHT],
  //   needAuthentication: true,
  //   dropdown: true,
  //   children: [
  //     Pages.USER,
  //     // Pages.SETTINGS,
  //     // Pages.ADMIN,
  //     Pages.LOGOUT,
  //   ],
  //   showLabel: false
  // },
  // ADMIN: {
  //   url: '/admin',
  //   label: 'admin.title',
  //   icon: IconNames.KEY,
  //   component: Admin,
  //   page: Pages.ADMIN,
  //   includeIn: [Sections.NAVBAR_RIGHT],
  //   disabled: true,
  //   hidden: true,
  //   needAuthentication: true,
  //   permission: TPPermission.ADMIN,
  //   showLabel: false,
  // },
  // SETTINGS: {
  //   url: '/settings',
  //   label: 'settings.title',
  //   icon: IconNames.COG,
  //   component: Settings,
  //   page: Pages.SETTINGS,
  //   includeIn: [Sections.NAVBAR_RIGHT],
  //   disabled: true,
  //   hidden: true,
  //   needAuthentication: true,
  //   permission: TPPermission.ADMIN,
  // },
  // LOGIN: {
  //   url: '/login',
  //   label: 'login.title',
  //   icon: IconNames.LOG_IN,
  //   component: Login,
  //   page: Pages.LOGIN,
  //   excludeFrom: [Sections.SIDEBAR, Sections.NAVBAR, Sections.NAVBAR_RIGHT],
  //   needAuthentication: false,
  //   // disabled: true,
  //   hidden: true,
  // },
  // LOGOUT: {
  //   url: '/logout',
  //   label: 'logout.title',
  //   icon: IconNames.LOG_OUT,
  //   component: Dashboard,
  //   page: Pages.LOGOUT,
  //   excludeFrom: [Sections.SIDEBAR, Sections.NAVBAR, Sections.NAVBAR_RIGHT],
  //   needAuthentication: false,
  //   // disabled: true,
  //   hidden: true,
  // },

  // PAGE_404: {
  //   url: '/*',
  //   label: '404',
  //   icon: IconNames.ERROR,
  //   component: Page404,
  //   page: Pages.PAGE_404,
  //   excludeFrom: [Sections.SIDEBAR, Sections.NAVBAR, Sections.NAVBAR_RIGHT],
  //   needAuthentication: false,
  //   // disabled: true,
  //   hidden: true,
  // },
}
