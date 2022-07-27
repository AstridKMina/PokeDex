import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './detailsPage.css'
import Pokemon from './components/Pokemon'
import UserInput from './components/UserInput'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokemonItem from './components/PokemonItem'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<UserInput />} />

          {/* /* <Route element={<ProtectedRoutes/>}> */ }
          <Route path='/Pokemon' element={<Pokemon />} />
          <Route path='/Pokemons/:id' element={<PokemonDetail />} />
          <Route path='/PokemonItem' element={<PokemonItem />} />
// {/* </Route> */}

          
       </Routes>
      </HashRouter>
    </div> 
  )
}

export default App
