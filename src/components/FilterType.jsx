import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const FilterType = () => {


  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeFilterType, setPokeFilterType] = useState([]);
  const [typeValue, setTypeValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedType = event.target.value;
    setTypeValue(selectedType);
    navigate(`/Pokemons/type/${selectedType}`, { replace: false });
  };


  useEffect(() => {

    const pokemonsFilter = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/type");
        setPokeFilterType(res.data.results || []);
        console.log(res.data.results)
      } catch (err) {
        console.error("Error al obtener los Pokémon:", err);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    pokemonsFilter();
  }, []);


  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-danger">Error loading Pokémon.</div>;
  }

  return (
    <div className="filter-container">
      <select onChange={handleChange} value={typeValue || ""} className="filter-select">
        <option value="">Select a type</option>
        {pokeFilterType.map((type) => (
          <option key={type.url} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  )
}