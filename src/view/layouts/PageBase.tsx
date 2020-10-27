import * as React from 'react'
import { useOvermind } from '~overmindApp'


const PageBase: React.FunctionComponent = ({ children }) => {
  const { state, actions } = useOvermind()
  return (
    <>
      {children}
    </>
  )
}

export default PageBase
