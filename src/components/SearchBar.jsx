
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {

  const [pokemonSearch, setPokemonSearch] = useState("");

  const navigate = useNavigate();

  const search = useCallback((e) => {
    e.preventDefault();
    navigate(`/Pokemons/${pokemonSearch}`, { replace: false });
    setPokemonSearch(""); 
}, [pokemonSearch, navigate]);

  return (
    <form className="myForm" onSubmit={search}>
      <input
        className="myInput"
        type="text"
        value={pokemonSearch}
        placeholder="Search here"
        onChange={(e) => setPokemonSearch(e.target.value)}
      />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};