import React from 'react'
import  ReactDOM  from 'react-dom/client'
let poke;
const Data = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((resolve) => {
      return resolve.json()
    })
    .then((data) => {
      poke = data;
    
    //   console.log(data.name)
    })
}
// console.log(poke);

export default Data;