import React from 'react';

const Modal2 = ({ pokemon, toggle1, isOpen1 }) => {




    return (
        <div>
            {isOpen1 && (
                <div className='modal'>
                    <div className="containerModal1">
                        <h3>Details</h3>
                        <button  className='modalBtn' onClick={toggle1}><i className="fa-solid fa-xmark"></i></button>
                        <img className='modalImg' src={pokemon.sprites?.front_shiny} alt="" />
                        <ul>
                            <li> Species:{pokemon.species.name}</li>
                            {pokemon?.types?.map(poke => (
                                <li key={poke.type.url}>
                                   Types: {poke.type.name}
                                </li>
                            ))}
                             {pokemon?.abilities?.map(poke => (
                                <li key={poke.ability.url}>
                                   Ability: {poke.ability.name}
                                </li>
                            ))}

                            <li>Base Experience: {pokemon.base_experience}</li>
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Modal2;