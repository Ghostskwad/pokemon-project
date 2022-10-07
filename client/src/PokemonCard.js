
import { usePokemon } from './PokemonContext'
import { Link } from 'react-router-dom';
import pokeball from './images/pokeball.png';
import openBall from './images/pokeball-open.png';
import axios from "axios"

function PokemonCard({ pokemon, user }) {
    const { filteredPokedexPokemon, handlePokedex } = usePokemon()
    // console.log(user)
    

    const isInPokedex = filteredPokedexPokemon.some(item => item.game_index === pokemon.id)

    function handleClick() {
        if (!isInPokedex) {
            const getFlavorText = async () => {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
                const flavorText = await res.data.flavor_text_entries[6].flavor_text.replace("\f"," ")

                const addToPokedex = async (flavorText) => {
                    const res = await axios.post ('/pokemons', {
                        name: pokemon.name,
                        game_index: pokemon.id,
                        height: pokemon.height,
                        weight: pokemon.weight,
                        base_experience: pokemon.base_experience,
                        flavor_text: flavorText
                    })
                    const pokemonId = res.data.id
                    

                    const handleUser = (pokemonId) => {
                        axios.post('/user_pokemons', {
                            user_id: user.id,
                            pokemon_id: pokemonId
                        })
                    }
                    
                    const addTypes = (pokemonId) => {
                        if (pokemon.types[1] != null) {
                        axios.post ('/pokemon_types', {
                            pokemon_id: pokemonId,
                            name: pokemon.types[0].type.name
                        })
                        axios.post ('/pokemon_types', {
                            pokemon_id: pokemonId,
                            name: pokemon.types[1].type.name
                        })
                    } else  {
                        axios.post ('/pokemon_types', {
                            pokemon_id: pokemonId,
                            name: pokemon.types[0].type.name
                        }) 
                    }
                    } 

                    const addStats = async (pokemonId) => {
                        const resH = await axios.post ('/stats', {
                            base_stat: pokemon.stats[0].base_stat
                        })
                        const hpId = await resH.data.id

                        const resA = await axios.post ('/stats', {
                            base_stat: pokemon.stats[1].base_stat
                        })
                        const atId = await resA.data.id

                        const resD = await axios.post ('/stats', {
                            base_stat: pokemon.stats[2].base_stat
                        })
                        const deId = await resD.data.id

                        const resSa = await axios.post ('/stats', {
                            base_stat: pokemon.stats[3].base_stat
                        })
                        const saId = await resSa.data.id

                        const resSd = await axios.post ('/stats', {
                            base_stat: pokemon.stats[4].base_stat
                        })
                        const sdId = await resSd.data.id

                        const resS = await axios.post ('/stats', {
                            base_stat: pokemon.stats[5].base_stat
                        })
                        const sId = await resS.data.id

                        const setHp = (hpId) => {
                            axios.post('/stat_name_join_tables', {
                                stat_id: hpId,
                                name: pokemon.stats[0].stat.name
                            })
                        }
                        const assignHpStat = (pokemonId, hpId) => {
                            axios.post('pokemon_stats', {
                                pokemon_id: pokemonId,
                                stat_id: hpId
                            })
                        }
                        const setAttack = (atId) => {
                            axios.post('/stat_name_join_tables', {
                                stat_id: atId,
                                name: pokemon.stats[1].stat.name
                            })
                        }
                        const assignAttackStat = (pokemonId, atId) => {
                            axios.post('pokemon_stats', {
                                pokemon_id: pokemonId,
                                stat_id: atId
                            })
                        }
                        const setDefense = (deId) => {
                            axios.post('/stat_name_join_tables', {
                                stat_id: deId,
                                name: pokemon.stats[2].stat.name
                            })
                        }
                        const assignDefenseStat = (pokemonId, deId) => {
                            axios.post('pokemon_stats', {
                                pokemon_id: pokemonId,
                                stat_id: deId
                            })
                        }
                        const setSpAttack = (saId) => {
                            axios.post('/stat_name_join_tables', {
                                stat_id: saId,
                                name: pokemon.stats[3].stat.name
                            })
                        }
                        const assignSpAttackStat = (pokemonId, saId) => {
                            axios.post('pokemon_stats', {
                                pokemon_id: pokemonId,
                                stat_id: saId
                            })
                        }
                        const setSpDefense = (sdId) => {
                            axios.post('/stat_name_join_tables', {
                                stat_id: sdId,
                                name: pokemon.stats[4].stat.name
                            })
                        }
                        const assignSpDefenseStat = (pokemonId, sdId) => {
                            axios.post('pokemon_stats', {
                                pokemon_id: pokemonId,
                                stat_id: sdId
                            })
                        }
                        const setSpeed = (sId) => {
                            axios.post('/stat_name_join_tables', {
                                stat_id: sId,
                                name: pokemon.stats[5].stat.name
                            })
                        }
                        const assignSpeedStat = (pokemonId, sId) => {
                            axios.post('pokemon_stats', {
                                pokemon_id: pokemonId,
                                stat_id: sId
                            })
                        }
                    
                        setHp(hpId)
                        assignHpStat(pokemonId, hpId)
                        setAttack(atId)
                        assignAttackStat(pokemonId, atId)
                        setDefense(deId)
                        assignDefenseStat(pokemonId, deId)
                        setSpAttack(saId)
                        assignSpAttackStat(pokemonId, saId)
                        setSpDefense(sdId)
                        assignSpDefenseStat(pokemonId, sdId)
                        setSpeed(sId)
                        assignSpeedStat(pokemonId, sId)

                    }

                    const addSprites = async (pokemonId) => {
                        const res = await axios.post ('/sprites', {
                            front_default: pokemon.sprites.front_default,
                            back_default: pokemon.sprites.back_default,
                            official_artwork: pokemon.sprites.other["official-artwork"].front_default
                        })
                        const spriteId = res.data.id

                        const assignSprites = async (pokemonId, spriteId) => {
                            await axios.post('/pokemon_sprites', {
                                pokemon_id: pokemonId,
                                sprite_id: spriteId
                            })
                        }

                        assignSprites(pokemonId, spriteId)
                        

                    }

                    addTypes(pokemonId)
                    addStats(pokemonId)
                    addSprites(pokemonId)
                    handleUser(pokemonId)

                    // axios.get(`/pokemons/${pokemonId}`).then(resp => handlePokedex(resp.data, ""))
                    
                }
                
                addToPokedex(flavorText)
                
        }
        getFlavorText()
        } else {
            handlePokedex(pokemon, "delete")
        }
    }

    // const handleReload = async () => {
    //     alert("Great job! Your Pokemon loves it's new nickname!")
    //     window.location.reload()
    // }

    return (
        <div className='card'>
            {/* <Link to={{
                pathname: `/${pokemon.name}`,
                state: { 
                    pokemon
                }
            }}> */}
            <Link to={`/${pokemon.name}`}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} width="100px" />
            </Link>
            <img id="pokeball" onClick={handleClick} src={isInPokedex ? pokeball : openBall} alt="pokeball" />
            <h3>{pokemon.name}</h3>
        </div>
    )
}

export default PokemonCard;