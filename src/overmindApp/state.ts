import { State } from "./types"
import { derived } from "overmind"

export const state: State = {
  app: {
    title: "Aureo",
    version: "0.1"
  },
  isLoading: {}
}
