import { Action } from 'overmind'
import { Pages, routes } from './routes'
import pagejs from 'page'

export const showPage: Action<any, any> = ({ state, actions }, { page, params }) => {
  // actions.UI.renderPage(page)
  state.Router.currentPage = page
}

export const gotoPage: Action<string, void> = ({ state, actions }, page) => {
  pagejs(actions.Router.getPageUrl(page))
}

export const setNextPage: Action<Pages, void> = ({ state, actions }, page) => {
  state.Router.nextPage = page
}

export const getPageUrl: Action<string, string> = ({ state, actions }, page) => {
  return `${pagejs.base()}${routes[page].url}`
}

export const getCurrentPage: Action<void, Pages> = ({ state, actions}) => {
  return state.Router ? state.Router.currentPage : Pages.DASHBOARD
}
