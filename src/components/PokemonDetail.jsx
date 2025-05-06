import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Modal from '../pages/Modal';
import Modal2 from '../pages/Modal2';
import pokemon_title from '../Assets/pokemon_title.png'



const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({});
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)


    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])


    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggle1 = () => {
        setIsOpen1(!isOpen1)
    }

    const imageSrc = pokemon.sprites?.other?.dream_world?.front_default 
    || pokemon.sprites?.other?.["official-artwork"]?.front_default 
    || pokemon.sprites?.front_default;



    return (
        <div className="details">
            <header>
                <img 
                    className="imgTitle" 
                    src={pokemon_title} 
                    alt="Title banner with a group of Pokémon" 
                />
            </header>
            
            <h1>{pokemon.name}</h1>
            
            <section className="card">
                <div className="circle">
                    <img 
                        className="imgDetails" 
                        src={imageSrc} 
                        alt={`Artwork of ${pokemon.name}`} 
                        role="img" 
                        aria-label={`Artwork of ${pokemon.name}`} 
                    />
                </div>
                
                <article className="content">
                    <div className="measures">
                        <p className="heightColumn">Height: {pokemon.height}</p>
                        <p className="weightColumn">Weight: {pokemon.weight}</p>
                    </div>

                    <section className="abilities">
                        <h2>Abilities</h2>
                        <ul className="abilitiesUl">
                            {pokemon.abilities?.map((ability, index) => (
                                <li key={index}>
                                    {ability?.ability?.name}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="stats">
                        <h2>Stats</h2>
                        <ul className="statsUl">
                            {pokemon.stats?.slice(3, 5).map((stat, index) => (
                                <li key={index}>
                                    {stat?.stat?.name}: {stat?.base_stat}
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>
            </section>
            <div aria-label="Open Modal 1" onClick={toggle}>
                <img className='btnImg' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d53dp2p-486dc6b9-730e-4908-bcb8-0dcfda8a96df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MmZhMDk2LWI4NTItNDE2MS1hZTVkLThmNDJmMDM3YzA1MVwvZDUzZHAycC00ODZkYzZiOS03MzBlLTQ5MDgtYmNiOC0wZGNmZGE4YTk2ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BQEuHqarrPr2mcMG92G3eCUfXftXBWiKVapqGqKUNgs" alt="First button icon"/>
            </div>

            <div aria-label="Open Modal 2" onClick={toggle1}>
                <img className='btnImg1' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d53dp2p-486dc6b9-730e-4908-bcb8-0dcfda8a96df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MmZhMDk2LWI4NTItNDE2MS1hZTVkLThmNDJmMDM3YzA1MVwvZDUzZHAycC00ODZkYzZiOS03MzBlLTQ5MDgtYmNiOC0wZGNmZGE4YTk2ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BQEuHqarrPr2mcMG92G3eCUfXftXBWiKVapqGqKUNgs" alt="Second button icon" />
            </div>
            <Modal pokemon={pokemon} toggle={toggle} isOpen={isOpen} />
            <Modal2 pokemon={pokemon} toggle1={toggle1} isOpen1={isOpen1} />

        </div >
    );
};

export default PokemonDetail;



