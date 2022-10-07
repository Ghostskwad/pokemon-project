import { useState } from 'react';
import { usePokemon } from './PokemonContext'
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar"

function Library({ pokedex, user }) {
    const { filteredPokemon, handleSearch } = usePokemon()
    const [isLibrary] = useState(true)
    
    return (
        <div className="main">
            <h1>Pokémon Library</h1>
            <SearchBar isLibrary={isLibrary} handleSearch={handleSearch}/>
            <div className="cardContainer">
                {filteredPokemon.map(pokemon => 
                    <PokemonCard
                        key={pokemon.id}
                        user={user}
                        pokemon={pokemon}
                        pokedex={pokedex}
                    />
                )}
            </div>
        </div>
    )
}

export default Library;