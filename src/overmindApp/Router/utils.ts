import { RouteMap, Route } from "./types"
import { Sections } from "./routes"

export const checkEnabledVisibleRoutes = (routes: RouteMap, section: Sections) => Object.keys(routes).filter(key => {
  const r: Route = routes[key]
  let result = !r.disabled && !r.hidden
  result = result && (!!r.includeIn ? r.includeIn.some(s => s === section) : true)
  result = result && (!!r.excludeFrom ? !r.excludeFrom.some(s => s === section) : true)
  return result
})
