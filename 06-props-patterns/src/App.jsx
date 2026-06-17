import React from 'react'
import {Greeting} from './Greeting'
import {UserCard} from './UserCard'
import {CardWrapper} from './CardWrapper'

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
      <CardWrapper title="User Profile"> 
        <h3>Bruce Wayne</h3>
        <h3>bruce.wayne@gmail.com</h3>
      </CardWrapper>
    </div>
  )
}

export default App
