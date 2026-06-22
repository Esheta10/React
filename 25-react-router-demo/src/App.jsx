import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {NavBar} from './Navbar'
import { OrderSummary } from './OrderSummary'
import { NoMatch } from './NoMatch'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='order-summary' element={<OrderSummary/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </div>
  )
}

export default App
