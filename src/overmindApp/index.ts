import { IConfig } from 'overmind'
import { createHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import * as effects from './effects'
import onInitialize from './onInitialize'
import * as UI from './UI'
import * as Router from './Router'
import * as Dashboard from './Dashboard'
import { namespaced, merge } from 'overmind/config'


export const config = merge(
  {
    onInitialize,
    state,
    actions,
    effects,
  },
  namespaced({
    UI,
    Router,
    Dashboard,
  })
)

export interface Config extends IConfig<typeof config> { }

declare module 'overmind' {
  interface Config extends IConfig<typeof config> { }
}

export const useOvermind = createHook<typeof config>()
