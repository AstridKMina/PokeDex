import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Modal from './Modal';
import Modal2 from './Modal2';
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

    // console.log(pokemon)



    return (
        <div className='details'>

            <img className='imgTitle' src={pokemon_title} alt="" />
            <h1>{pokemon.name} </h1>

            <div className="card">
                <div className="circle">
                    <img className="imgDetails" src={pokemon.sprites?.other.dream_world.front_default} alt="" />
{/* 
                    <img className='grassImg' src="./src/Assets/grass.png" alt="" /> */}
                </div>
                <div className="content">
                    <div className='measures'>
                        <div className='heightColumn'>Height:{pokemon.height}</div>
                        <div className='weightColumn'>Weight:{pokemon.weight}</div>
                    </div>
                    <div className='abilities'>
                        <h2>Abilities</h2>
                        <ul className='abilitiesUl'>
                            <li>{pokemon.abilities?.[0]?.ability.name}</li>
                            <li> {pokemon.abilities?.[1]?.ability.name}</li>
                        </ul>
                    </div >
                    <div className='stats'>
                        <h2>Stats</h2>
                        <ul className='statsUl'>
                            <li>{pokemon.stats?.[3].stat?.name}: {pokemon.stats?.[3].base_stat}</li>
                            <li>{pokemon.stats?.[4].stat?.name}: {pokemon.stats?.[4].base_stat}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  onClick={toggle}><img className='btnImg' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d53dp2p-486dc6b9-730e-4908-bcb8-0dcfda8a96df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MmZhMDk2LWI4NTItNDE2MS1hZTVkLThmNDJmMDM3YzA1MVwvZDUzZHAycC00ODZkYzZiOS03MzBlLTQ5MDgtYmNiOC0wZGNmZGE4YTk2ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BQEuHqarrPr2mcMG92G3eCUfXftXBWiKVapqGqKUNgs" alt="" /></div>

            <div  onClick={toggle1}><img className='btnImg1' src=" https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/072fa096-b852-4161-ae5d-8f42f037c051/d53dp2p-486dc6b9-730e-4908-bcb8-0dcfda8a96df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MmZhMDk2LWI4NTItNDE2MS1hZTVkLThmNDJmMDM3YzA1MVwvZDUzZHAycC00ODZkYzZiOS03MzBlLTQ5MDgtYmNiOC0wZGNmZGE4YTk2ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BQEuHqarrPr2mcMG92G3eCUfXftXBWiKVapqGqKUNgs" alt="" /></div>
            <Modal pokemon={pokemon} toggle={toggle} isOpen={isOpen}/>
            <Modal2 pokemon={pokemon} toggle1={toggle1} isOpen1={isOpen1}/>
             
        </div >
    );
};

export default PokemonDetail;



