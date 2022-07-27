import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import { changeUser } from "../store/slices/user.slice"

const UserInput = () => {

    const [userName, setUserName] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault();
        alert(userName);
        dispatch(changeUser(userName))
        navigate("Pokemon")
    }

    return (
        <div>
            <header className='firstHeader'>
                {/* <img src="https://c.tenor.com/lAz1WcGbKukAAAAC/pokeball-catch.gif" alt="" /> */}
                {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd6baedb-fdd4-435e-b96d-43b11622a285/dd2ceku-a9ce3d71-d601-4522-b3a4-6af3aa847c46.png/v1/fill/w_622,h_350,q_70,strp/pokeball_by_quickboomcg_dd2ceku-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvY2Q2YmFlZGItZmRkNC00MzVlLWI5NmQtNDNiMTE2MjJhMjg1XC9kZDJjZWt1LWE5Y2UzZDcxLWQ2MDEtNDUyMi1iM2E0LTZhZjNhYTg0N2M0Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0bs7XnOMdXUB9m7WQzMaD2XOM5VCPbv1rp54-RJrvmQ" alt="" /> */}
                {/* <img src="https://cdn.dribbble.com/users/1771704/screenshots/14855056/media/87a746f733cc295401cef5dcadf05752.png?compress=1&resize=400x300&vertical=top" alt="" /> */}
                {/* <img src="https://c.tenor.com/T7TK5_jVeMoAAAAd/pokeball.gif" alt="" /> */}
                {/* <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cdd1b42-4355-40aa-b036-439b28bcba8c/d5xd664-8afdb0bd-8ed0-46ef-b392-132a25920cd3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjZGQxYjQyLTQzNTUtNDBhYS1iMDM2LTQzOWIyOGJjYmE4Y1wvZDV4ZDY2NC04YWZkYjBiZC04ZWQwLTQ2ZWYtYjM5Mi0xMzJhMjU5MjBjZDMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j8UkNoTB5uXg3izSz6hvhc8OGvpFJAIEWybgHy4bTcU" alt="" /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbU_Tv2P46oqd_LR8L6KtpX2FNr8iUEE1T316R246UE5F4QFQZVzf7ThEBCkV2Gng6ho&usqp=CAU" alt="" />
            </header>

            <div>
                <h1>Hello Master Trainer!</h1>
              
                <img className='ashImage' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b8e0dda-403a-4af3-9479-9fa0cb245f59/devf9g6-54c83f83-e197-46c1-947f-66d662b51d70.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJiOGUwZGRhLTQwM2EtNGFmMy05NDc5LTlmYTBjYjI0NWY1OVwvZGV2ZjlnNi01NGM4M2Y4My1lMTk3LTQ2YzEtOTQ3Zi02NmQ2NjJiNTFkNzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f-2HgENQNzxSFiH0zN2WPrsOx2aKe9mjkVS-LwvpJW0" alt="" />

                <h3>Give me your name to start!</h3>
                <form  className='firstForm' onSubmit={submit}>
                    <input className='firstInput'
                        type="text"
                        value={userName} placeholder="Name"
                        onChange={(e) => setUserName(e.target.value)}
                        
                    />
                    {/* <img src="./src/Assets/POKEBOLA-01.png" alt="" /> */}
                    <button className='myBtn' ><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
            <div className='btnImg'><img src="" alt="" /></div>
        </div>
    );
};

export default UserInput;