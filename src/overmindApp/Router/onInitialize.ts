import { OnInitialize } from 'overmind'
import { routes, Pages } from './routes'

const onInitialize: OnInitialize = (om) => {
  const { actions, effects } = om

  // redefine routes action
  // routes[Pages.ADMIN].action = actions.Admin.showAdmin

  // routes[Pages.LOGIN].action = actions.Login.showLogin
  // routes[Pages.LOGOUT].action = actions.Logout.authLogout

  // routes[Pages.DASHBOARD].action = actions.Dashboard.showDashboard
  // routes[Pages.REWORK].action = actions.Rework.showRework
  // routes[Pages.REWORK_RESULT].action = actions.ReworkResult.showReworkResult
  // routes[Pages.DATA_ANALYSIS].action = actions.DataAnalysis.showDataAnalysis
  // routes[Pages.REWORK_SOLDER].action = actions.ReworkSolder.showReworkSolder

  // init router
  effects.Router.router.initialize(routes, om as any)
}

export default onInitialize
