import React from 'react'

// Welcome component
function Welcome(){ 
  return <h2>Welcome, Esheta!</h2>
}
// Button Component
function Button(){
  return <button>Click Me!</button>
}

// Parent Component
const App = () => { 
  return (
    <div>
      <h1>Hello World!</h1>
      {/* child component */}
      <Welcome />
      <Button /> 
    </div>
  )
}

export default App
