
import React from 'react';




const Modal = ({ pokemon, toggle, isOpen }) => {


    console.log(pokemon.moves)

    return (
        <div className='myModal'> 
            {isOpen && (
                <div className='modal'>
                    <div className="containerModal">
                        <h3>Movements</h3>
                        <button className='modalBtn' onClick={toggle}><i className="fa-solid fa-xmark"></i></button>
                        <img className='modalImg' src={pokemon.sprites?.front_shiny} alt="" />
                        <ul>
                            {pokemon?.moves?.map(poke => (
                                <li key={poke.move.url}>
                                    {poke.move.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Modal;