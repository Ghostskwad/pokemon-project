import { useState } from "react"
import { Link } from 'react-router-dom';
import { usePokemon } from './PokemonContext'
import axios from "axios"

function PokedexList({ pokemon }) {
    const { handlePokedex } = usePokemon()
    const {name, sprites, stats, base_experience, nickname} = pokemon
    const [stateNickname, setStateNickname] = useState("")
    console.log(pokemon)

    function handleClick() {
        handlePokedex(pokemon, "delete")
    }

    function handleChange(e) {
        setStateNickname(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.patch(`/pokemons/${pokemon.id}`, {nickname: stateNickname
    })
        .then(alert("Great job! Your Pokemon loves it's new nickname!"),
        window.location.reload())
        setStateNickname("")
    }
    
    return (
        <div className='pokedex'>
            <h4><span>❤️{stats[0].base_stat}</span><span>{base_experience} XP</span></h4>
            {/* <Link to={{
                pathname: `/${name}`,
                state: {
                    pokemon
                }
            }}> */}
            <Link to={`/${pokemon.name}`}>
                <img src={sprites[0].front_default} alt={name} width="100px" />
            </Link>
            <h3>{name}</h3>
            <h4>{nickname !== "" ? `"${nickname}"` : '--'}</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={stateNickname}
                    onChange={handleChange}
                    placeholder="Enter nickname"
                />
            </form>
            <button onClick={handleClick}>Remove from Pokedex</button>
        </div>
    )
}

export default PokedexList