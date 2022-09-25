import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const PokemonItem = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(pokemonUrl).then(res => setPokemon(res.data))
    }, []);


    return (

        <div className="itemDiv" onClick={() => navigate(`/Pokemons/${pokemon.id}`)}>

            <div className="cardImg">
                <img className='my1Image' src={pokemon.sprites?.other.dream_world.front_default} alt="pokemon-img" />
            </div>
            {pokemon.name}
            <ul className='content'>
                <li>Type:{pokemon.types?.[0].type?.name} / {pokemon.types?.[1]?.type.name}</li>
                <li> {pokemon.stats?.[0].stat?.name}: {pokemon.stats?.[0].base_stat}  </li>
                <li>{pokemon.stats?.[1].stat?.name}: {pokemon.stats?.[1].base_stat}</li>
                <li>{pokemon.stats?.[2].stat?.name}: {pokemon.stats?.[2].base_stat}</li>
                <li>{pokemon.stats?.[5].stat?.name}: {pokemon.stats?.[5].base_stat}</li>
            </ul>
        </div>

    );
};

export default PokemonItem;