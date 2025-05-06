import { Routes, Route } from 'react-router-dom'
import './App.css'
import './detailsPage.css'
import UserInput from './pages/UserInput'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import { PokemonCard } from './components/PokemonCard'
import { PokemonPage } from './pages/PokemonPage'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserInput />} />

        <Route element={<ProtectedRoutes />}>

        <Route path="/Pokemons/type/:type" element={<PokemonPage />} />
        <Route path="/Pokemons/:id" element={<PokemonDetail />} />
        <Route path="/Pokemons" element={<PokemonPage />} />
        <Route path="/PokemonCard" element={<PokemonCard />} />

        </Route>
      </Routes>
    </div>
  );
}


export default App
