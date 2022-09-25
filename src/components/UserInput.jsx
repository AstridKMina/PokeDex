import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { changeUser } from "../store/slices/user.slice"

const UserInput = () => {

    const [userName, setUserName] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        dispatch(changeUser(userName))
        navigate("Pokemon")
    }

    return (
        <div>
            <header className='firstHeader'>
                <img src="https://i.ytimg.com/vi/T_NOgNXz30E/maxresdefault.jpg" alt="pokemons-img" />
            </header>

            <div className='inicialPage'>
                <h1>Hello Master Trainer!</h1>
              
                <img className='ashImage' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b8e0dda-403a-4af3-9479-9fa0cb245f59/devf9g6-54c83f83-e197-46c1-947f-66d662b51d70.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiOGUwZGRhLTQwM2EtNGFmMy05NDc5LTlmYTBjYjI0NWY1OVwvZGV2ZjlnNi01NGM4M2Y4My1lMTk3LTQ2YzEtOTQ3Zi02NmQ2NjJiNTFkNzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f-2HgENQNzxSFiH0zN2WPrsOx2aKe9mjkVS-LwvpJW0" alt="" />

                <h3>Please, give me your name to start!</h3>
                <form  className='firstForm' onSubmit={submit}>
                    <input className='firstInput'
                        type="text"
                        value={userName} placeholder="Name"
                        onChange={(e) => setUserName(e.target.value)}
                        
                    />
            
                    <button className='myBtn' ><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
            <div className='btnImg'><img src="" alt="" /></div>
        </div>
    );
};

export default UserInput;