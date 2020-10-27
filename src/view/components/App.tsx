import * as React from 'react'
import { useOvermind } from '~overmindApp'
// import Layout from './Layout'

const App: React.FC = () => {
  const { state } = useOvermind()
  return <div>
    {/* <Layout /> */}
    Hello!
  </div>
}

export default App
