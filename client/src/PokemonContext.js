import React, { useContext, useState, useEffect } from "react";
import axios from "axios"

// create the context
const PokemonContext = React.createContext()

// create custom hook
function usePokemon() {
    return useContext(PokemonContext)
}

// create a provider component
function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [inPokedex, setInPokedex] = useState([])
  const [searchedPokemon, setSearchedPokemon] = useState('')

  
    const getPokemons = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=386")
        const data = await res.data
        // const data = await res

        const createPokemonObject = (results) => {
        results.map(async pokemon => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.data
            setPokemons(pokemons => [...pokemons, data])
        })
        }
    
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getPokemons()
        
        axios.get('/pokemons').then(resp => setInPokedex(resp.data))
     }, [])
 
  const handlePokedex = (updatedPokemon, mode) => {
    if (mode === "delete") {
    axios.delete(`/pokemons/${updatedPokemon.id}`)
    setInPokedex(inPokedex.filter(pokemon => pokemon.game_index !== updatedPokemon.game_index? pokemon : null))
    } else if (mode === "replace") {
    setInPokedex(inPokedex.map(pokemon => pokemon.game_index !== updatedPokemon.game_index ? pokemon : updatedPokemon))
    } else {
    setInPokedex([...inPokedex, updatedPokemon])
    }
  }

    //  const handlePokedex = (updatedPokemon, mode) => {
    //     if (mode === "delete") {
    //     axios.delete(`/pokemons/${updatedPokemon.id}`)
    //     setInPokedex(inPokedex.filter(pokemon => pokemon.game_index !== updatedPokemon.game_index ? pokemon :null))
    //     } else if (mode === "replace") {
    //  }
  const handleSearch = (e) => {
    setSearchedPokemon(e.target.value)
  }

  const handlePokedexSearch = (e) => {
    setSearchedPokemon(e.target.value)
  }

  let filteredPokemon = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()))
  
  let filteredPokedexPokemon = inPokedex.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()))

    
  filteredPokemon.sort((a, b) => a.id - b.id)
  filteredPokedexPokemon.sort((a, b) => a.id - b.id)


  return <PokemonContext.Provider value={{inPokedex, filteredPokemon, handleSearch, filteredPokedexPokemon, handlePokedexSearch, handlePokedex}}>
            {children}
        </PokemonContext.Provider>;
}

export { PokemonProvider, usePokemon };