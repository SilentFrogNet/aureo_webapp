import { IUIState, LIGHT_THEME, DARK_THEME } from './types'
import { derived } from 'overmind'

export const state: IUIState = {
  // theme: derived<IUIState, string>(state =>
  //   state.dark ? DARK_THEME : LIGHT_THEME
  // ),
  theme: "light",
  dark: false,
}
