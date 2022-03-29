import { Route, Routes } from 'react-router-dom'
import MobileLayout from './components/layout/MobileLayout'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import MyPokemon from './pages/MyPokemon'

function App() {
  return (
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/pokemon/:name"} element={<PokemonDetail />} />
          <Route path="/my-pokemon" element={<MyPokemon />} />
        </Routes>
      </MobileLayout>
  );
}

export default App;
