import React from 'react'
import {Counter} from './Counter'
import {LoginCard} from './LoginCard'
import {UserDashboard} from './UserDashboard'

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <LoginCard />
      <UserDashboard isPremium={true} />
    </div>
  )
}

export default App
