import { Action } from "overmind"
import { Pages, Sections } from "./routes"
import * as t from 'io-ts'

export type Route = {
  url: string,
  icon?: string,
  label?: string,
  page: Pages,
  component: React.FC,
  action?: Action<any, any>,
  renderer?: Action<any, any>,
  children?: Pages[],
  includeIn?: Sections[],
  excludeFrom?: Sections[],
  disabled?: boolean,
  hidden?: boolean,
  needAuthentication?: boolean,
  dropdown?: boolean,
  showLabel?: boolean,
}

export type RouteMap = {
  [key in Pages]: Route
}

export interface IRouteConfig {
  route: Route
}
export interface IRouteMapConfig {
  routes: RouteMap
}

export const RouterExtraArgs = t.intersection([
  t.type({

  }),
  t.partial({
    basePath: t.string,
  })
])
export type RouterExtraArgs = t.TypeOf<typeof RouterExtraArgs>

// STATE
export type IRouteState = {
  currentPage: Pages,
  basePath: string,
  nextPage: Pages,
}
