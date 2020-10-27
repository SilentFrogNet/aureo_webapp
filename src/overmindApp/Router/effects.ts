import { RouteMap, Route } from "./types"
import page from 'page'
import { Config } from '~overmindApp/index'
import { Pages } from "./routes"

export const router = {
  initialize(routes: RouteMap, om: Config) {
    Object.keys(routes).map(key => {
      const route: Route = routes[key]
      if (route.disabled)
        return
      const curAction: Function = typeof route.action === 'undefined'
        ? om.actions.Router.showPage
        : route.action
      page(route.url, ({ params }) => curAction({ page: route.page, params }))
    })
    page('/*', ({ params}) => om.actions.Router.showPage({ page: Pages.PAGE_404, params })) // set the 404 page
    page.base(om.state.Router.basePath)
    page.start()
  },
}
