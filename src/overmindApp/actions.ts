import { Operator, pipe, Action, AsyncAction, mutate, filter, debounce } from 'overmind'
import { Pages } from './Router/routes'
import log from 'loglevel'
import Cookies from 'js-cookie'

// export const showAdmin: Action<any> = ({ state }, { params }) => {
//   state.Router.currentPage = Pages.ADMIN
//   log.debug(params)
// }
