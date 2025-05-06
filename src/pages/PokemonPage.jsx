import axios from 'axios';
import { useEffect, useState } from 'react';
import { FilterType } from "../components/FilterType";
import PokemonList from "../components/PokemonList";
import { SearchBar } from "../components/SearchBar";
import { useSelector } from "react-redux";
import logo from "../Assets/logo.svg";
import { useLocation, useNavigate, useParams , useSearchParams } from 'react-router-dom';

export const PokemonPage = () => {
    const user = useSelector((state) => state.user);

    const [allPokemon, setAllPokemon] = useState([]); 
    const [filteredPokemon, setFilteredPokemon] = useState([]); 
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    const [page, setPage] = useState(1); 
    const [input, setInput] = useState(1); 


    const { type } = useParams(); 
  




    const itemsPerPage = 20;

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon?offset=&limit=1154`
                );
                setAllPokemon(response.data.results);
                setFilteredPokemon(response.data.results);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
                setError('Failed to load Pokémon. Please try again later.');

            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);


    useEffect(() => {
        if (!type) {
            setFilteredPokemon(allPokemon); 
            setPage(1); 
    
        } else {
            const fetchPokemonByType = async () => {
                try {
                    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);
                    const filtered = res.data.pokemon.map((p) => p.pokemon);
                    setFilteredPokemon(filtered);
                    setPage(1); 
    
    
                } catch (error) {
                    console.error("Error fetching Pokémon by type:", error);
                }
            };
    
            fetchPokemonByType();
        }
    }, [type, allPokemon]);
    




    //  Pagination
    const lastPage = Math.ceil(filteredPokemon.length / itemsPerPage);
    const paginatedPokemon = filteredPokemon.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );


    const changePage = (newPage) => {
        setPage(newPage);
        setInput(newPage);
    };
    
 
    const nextPage = () => {
        changePage(page + 1);
    };
    
    const prevPage = () => {
        changePage(page - 1);
    };

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        console.log(value, "el valor en el input")
        if (value > 0 && value <= lastPage) {
            setInput(value);
            setPage(value);
          
        }
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            const value = Number(input);
            if (value >= 1 && value <= lastPage) {
                changePage(value);
            }
        }
    };

    const handleInputBlur = () => {
        if (input < 1 || input > lastPage) {
            setInput(page);  
        }
    };

    if (loading) return <div className="spinner">Loading Pokémon...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <>
            <header className="myHeader">
                <img className="logo" src={logo} alt="Pokémon App Logo" />
            </header>
            <main className="pokemonPage-main">
                <section aria-label="Welcome section">
                    <h3>Welcome {user} to Poke App</h3>
                </section>
                <section aria-label="Search Pokémon">
                    <SearchBar />
                </section>
                <section aria-label="Filter Pokémon by type">
                    <FilterType />
                </section>
                <section className='pokemonList-section' aria-label="Pokémon list">
                    <PokemonList pokemonList={paginatedPokemon} />
                </section>
                <nav className="pagination" aria-label="Pokémon list pagination">
                    <div className="pagination-controls">
                        <button
                            className="pagination-btn"
                            onClick={prevPage}
                            disabled={page === 1}
                            aria-label="Go to previous page"
                        >
                            <i className="fa-solid fa-caret-left" aria-hidden="true"></i>
                        </button>
                        <label htmlFor="pageInput" className="sr-only">
                            Page number
                        </label>
                        <input
                            id="pageInput"
                            type="number"
                            value={input}
                            min={1}
                            max={lastPage}
                            onChange={handleInputChange}
                            onKeyPress={handleInputKeyPress}
                            onBlur={handleInputBlur}
                            aria-label={`Page number, current page ${page} of ${lastPage}`}
                        />
                        <span className="page-total"> of {lastPage}</span>
                        <button
                            className="pagination-btn"
                            onClick={nextPage}
                            disabled={page === lastPage}
                            aria-label="Go to next page"
                        >
                            <i className="fa-solid fa-caret-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </nav>
            </main>
        </>
    )};