import React from 'react'
import {Greeting} from './Greeting'
import {UserCard} from './UserCard'

const App = () => {
  return (
    <div>
      <Greeting name="Alice" message="Hello" />
      <Greeting name="Paul" message="Guten Morgan"/>
      <Greeting name="Amy" message="Ni hao" />
      <Greeting name="Esheta" message="Namaste"/>
      <Greeting name="Bob"/>
      <Greeting message="Good morning"/>
      <Greeting/>
      <UserCard name="Esheta" age={100} city="Kolkata" email="abc@gmail.com" />
    </div>
  )
}

export default App
