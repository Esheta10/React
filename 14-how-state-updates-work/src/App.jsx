import React from 'react'
import { SimpleCounter } from './SimpleCounter'
import {PreviousStateCounter} from './PreviousStateCounter'
import {BatchingCounter} from './BatchingCounter'
import {UserProfile} from './UserProfile'
import {TodoList} from './TodoList'
const App = () => {
  return (
    <div>
      {/* <SimpleCounter/> */}
      {/* <PreviousStateCounter/> */}
      {/* <BatchingCounter/> */}
      {/* <UserProfile/> */}
      <TodoList/>
    </div>
  )
}

export default App
