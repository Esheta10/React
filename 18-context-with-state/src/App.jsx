import React from 'react'
import { Header } from './Header'
import { UserContextProvider } from './UserContextProvider'

const App = () => {
  
  return (
        <UserContextProvider>
          <div>
            <h1>Dashboard</h1>
            <Header/>
          </div>
        </UserContextProvider>
  )
}

export default App
