import * as React from 'react'
import { render } from 'react-dom'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import { config } from '~overmindApp'
import { Init } from '~overmindApp/types'
import App from '~view/components/App'
import log from 'loglevel'

import { version, name } from '../package.json'
import '~view/assets/scss/main.scss'


declare global {
  interface Window {
    init: Function
    translate: Function
    debugCtx: any
    log: any
  }
  interface Number {
    pad: Function
  }
}

switch (process.env.NODE_ENV) {
  case 'development':
    window.debugCtx = {}
    window.log = log
    break
  case 'production':
    window.log = log
    log.setLevel(log.levels.INFO)
    break

  default:
    break
}

export const init: Init = ({ instanceName, element }) => {
  const overmind = createOvermind(config, {
    // devtools: process.env.NODE_ENV === 'development',
    devtools: true,
    name: instanceName  
  })
  log.info(`>> ${name}:${instanceName} (v${version}) ${process.env.NODE_ENV.toUpperCase()} <<`)
  if (process.env.NODE_ENV === 'development')
    window.debugCtx.om = overmind

  render(
    <Provider value={overmind}>
      <App />
    </Provider>,
    element
  )
}

window.init = init
