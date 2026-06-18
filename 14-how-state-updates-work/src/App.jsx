import React from 'react'
import { SimpleCounter } from './SimpleCounter'
import {PreviousStateCounter} from './PreviousStateCounter'
import {BatchingCounter} from './BatchingCounter'

const App = () => {
  return (
    <div>
      {/* <SimpleCounter/> */}
      {/* <PreviousStateCounter/> */}
      <BatchingCounter/>
    </div>
  )
}

export default App
