import React from 'react'
import Cards from './cards'
import { useState, useEffect } from 'react'

export const Container = () => {

    const [pokemonName, setPokemonName] = useState([])
    const [pokemonImages, setPokemonImages] = useState([])

    useEffect(() => {
        // console.log("Hi useEffect");
        Data();
      }, [])
        
      function Data () {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then((resolve) => {
        return resolve.json()
      })
      .then((data) => {
        const urls = data.results.map((cardUrl) => {
            return cardUrl.url
        }) 
        // console.log(urls);
        const promisesArr = urls.map((url) => {
            return fetch(url).then(resolve => resolve.json()).then(data => data)
        })
        console.log(promisesArr);
        const arr = []
        Promise.all(promisesArr).then(data => data.map( (data) => {
            // console.log(data);
            return arr.push(data.sprites.other.dream_world.front_default)
        } ))
        console.log(pokemonImages)
        setPokemonImages(arr)
        console.log(pokemonImages);
        const pokeName = data.results.map( (cardName) => {
            return cardName.name
        } )
        setPokemonName(pokeName)
        console.log(data);
  
        // console.log("useEffect");

      })
      }
      
    
    // console.log("Rendering....");
    // console.log(pokemonName);
    return (
        
        <div className="cards-container">
            {pokemonName.map((mypokeName, index) => {
                return <Cards name = {mypokeName} key = {index}/>
            })} 
        </div>
        
    )
}