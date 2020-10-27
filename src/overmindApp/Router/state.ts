import { Pages } from './routes'
import { IRouteState } from './types'

export const state: IRouteState = {
  currentPage: Pages.DASHBOARD,
  basePath: '/',
  nextPage: null,
}
