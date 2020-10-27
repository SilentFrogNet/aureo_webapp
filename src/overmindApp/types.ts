import * as t from 'io-ts'
import { RouterExtraArgs } from '~overmindApp/Router/types'

export type IsLoading = {
  [cmp: string]: boolean
}

export type AppInfo = {
  title: string,
  version: string,
}

export type ApiResponse<T> = {
  status: number,
  body: T
}

export type State = {
  app?: AppInfo,
  isLoading: IsLoading,
}

export const ExtraArgs = t.intersection([
  t.type({

  }),
  t.partial({
    router: RouterExtraArgs,
  })
])
export type ExtraArgs = t.TypeOf<typeof ExtraArgs>

export interface InitParams {
  instanceName: string,
  element: HTMLElement,
  extraArgs: ExtraArgs,
}

export type Init = (params: InitParams) => void
