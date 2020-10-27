import * as React from 'react'
import { useOvermind } from '~overmindApp'
import Base from '~view/layouts/PageBase'


const Dashboard: React.FunctionComponent = () => {
  const { state, actions } = useOvermind()

  return (
    <Base>
      Dashboard!
    </Base>
  )
}

export default Dashboard
