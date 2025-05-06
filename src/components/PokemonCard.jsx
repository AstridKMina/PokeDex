import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';




export const PokemonCard = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
            .catch(error => console.error("Something went wrong:", error)).finally(() =>
                setLoading(false)
            );
    }, [pokemonUrl]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
      }


    return (
        <Link to={`/Pokemons/${pokemon?.id}`}>
            <div className="itemDiv" >

                <div className="cardImg">
                    <img className='my1Image' src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites?.other["official-artwork"].front_default || pokemon.sprites?.front_default}
                        alt="pokemon-img" />
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
        </Link>
    );
};

