import React from 'react'
import {Header} from './Header'
import { UserContext } from './UserContext';

const App = () => {
  const user = {
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark"
  };

  return (
    <UserContext value={user}>
       <div value={user}>
          <h1>Dashboard</h1>
          <Header />
      </div>
    </UserContext>
  )
}

export default App
