import React from 'react'
import {Welcome} from "./Welcome"
import {Product} from "./Product"

const App = () => {
  return (
    <div>
        <h1>Props</h1>
        <Welcome name = "Ben" alias="Captain Clark" />
        <Welcome name = "Stebin" alias="Joker" />
        <Welcome name = "Benny" alias="SuperMan" />
        <Product 
        name = "TV" 
        price = {12000}
        inStock = {true}
        categories = {["LED", "LCD", "HD"]} />
    </div>
  )
}

export default App
