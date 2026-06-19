import React from 'react'
import {Header} from './Header'

const App = () => {
  const user = {
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark"
  };

  return (
    <div>
       <h1>Dashboard</h1>
      <Header user={user}/>
    </div>
  )
}

export default App
