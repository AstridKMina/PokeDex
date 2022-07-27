import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import PokemonItem from './PokemonItem';
import { useNavigate } from 'react-router-dom'


const Pokemon = () => {


    const user = useSelector((state) => state.user);

    const [pokemons, setPokemons] = useState([]);
    const [pokemonSearch, setPokemonSearch] = useState('')
    const [pokemonsType, setPokemonType] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
            .then(res => setPokemons(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setPokemonType(res.data.results));
    }, [])

    const search = (e) => {
        e.preventDefault()
        // alert(pokemonSearch);
        navigate(`/Pokemons/${pokemonSearch}`);
    };

    const filterType = (e) => {
        // alert("Se seleccionó el tipo " + e.target.value);
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    };


    const [page, setPage] = useState(1);
    const [input, setInput] = useState(1)

    const pokemonNumbers = 20;
    const lastIndex = pokemonNumbers * page;
    const firstIndex = lastIndex - pokemonNumbers;
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(pokemons.length / pokemonNumbers);

    const nextPage = () => {
        setPage(page + 1)
        setInput(input + 1)
    }

    const prevPage = () => {
        setPage(page - 1)
        setInput(input - 1)
    }
    const numbers = [];
    for (let i = 1; i <= lastPage; i++) {
        numbers.push(i);
    }

    console.log(pokemonsType)



    return (

        <div className='pokedex' >
            <header className='myHeader'>
                <img className='logo' src="./src/Assets/logo.svg" alt="" />
            </header>

          
            <div className='pokemonsList'>
                <h3>Welcome {user} to Poke App</h3>
                <br />
                <form className='myForm' onSubmit={search}>
                    <input className='myInput'
                        type="text"
                        value={pokemonSearch} placeholder="Search here"
                        onChange={(e) => setPokemonSearch(e.target.value)}
                    />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <select onChange={filterType}>
                    <option value="">Selecciona un tipo</option>
                    {pokemonsType.map((pokemonType) => (
                        <option value={pokemonType.url}
                            key={pokemonType.url}>
                            {pokemonType.name}
                        </option>
                    ))}
                </select>

                <div className='allPoke'>
                    {pokemonPaginated.map(pokemon => (
                        <li key={pokemon?.url ? pokemon.url : pokemon.pokemon.url}>
                            {/* {pokemon?.url} */}
                            <PokemonItem pokemonUrl={pokemon?.url ? pokemon.url : pokemon.pokemon.url} />
                        </li>

                    ))}

                </div>
                <div className="bigBtn">
                    <div className='pokeDiv'>
                        <button className='pokeBtn' onClick={prevPage} disabled={page === 1}>
                            <i className="fa-solid fa-caret-left"></i>
                        </button>

                        <input type="text" value={input} />
                        <p>{lastPage}</p>

                        <button className='pokeBtn' onClick={nextPage} disabled={page === lastPage}>
                            <i className="fa-solid fa-caret-right"></i>
                        </button>
                        {/* <div className='btnImg' ><img src="" alt="" /></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;