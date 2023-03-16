import React from 'react'
import Cards from './cards'
import { useState, useEffect } from 'react'


export const Container1 = () => {

    const [pokemonName, setPokemonName] = useState([])
    const [pokemonImgURL, setPokemonImgURL] = useState([])

    useEffect(() => { getPokemonData() } , [] )
    useEffect(() => { getPokemonImages() }, [pokemonImgURL] )

    function getPokemonImages () {

        // const imagePromises = pokemonImgURL.map( async (urls) => {

        //     const response = await fetch(urls)
           
        //     return response.json()

        // } )

        const imagePromises = pokemonImgURL.map( urls => fetch(urls).then( response => response.json() ) )

        const arr = []

        Promise.all(imagePromises).then(objectsData => objectsData.map( (obj) => {
            return arr.push(obj.sprites.other.dream_world.front_default)
        } ))

       console.log(arr);

    }

    async function getPokemonData () {

        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')

        const jsonData = await data.json()
        
        const pokemonData = jsonData.results

        const pokemonNames = pokemonData.map((pokemon) => {
            return pokemon.name
        })   
        setPokemonName(pokemonNames)

        const pokemonImgURLS = pokemonData.map((pokemon) => {
            return pokemon.url
        })
        
        setPokemonImgURL(pokemonImgURLS)
        
    }
  
    

}