
import React, { useEffect, useState } from 'react';

import ModalVideo from '../pages/ModalVideo';
import { PokemonCard } from './PokemonCard';


const PokemonList = ({ pokemonList }) => {

    const [isVisible, setIsVisible] = useState(() => {
        return sessionStorage.getItem('hasWatchedVideo') !== "true";
    });


    useEffect(() => {

        if (isVisible) {
            setTimeout(() => {
                setIsVisible(false);
                sessionStorage.setItem("hasWatchedVideo", "true");
            }, 6000);
        }
    }, [isVisible]);


    return (
        <div className='pokedex' >
            <div className='pokemonsList'>

                <ul className='col3'>
                    {pokemonList.map(pokemon => (
                        <li key={pokemon?.url ? pokemon.url : pokemon.pokemon.url}>
                            <PokemonCard pokemonUrl={pokemon?.url ? pokemon.url : pokemon.pokemon.url} />
                        </li>
                    ))}
                </ul>

                {isVisible && <ModalVideo onClose={() => setIsVisible(false)} />}

            </div>
        </div>
    )
}
export default PokemonList;