import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import PrevNextButtons from "./components/PrevNextButtons";
import PokemonDetails from "./components/PokemonDetails";
import getPokemonList from "./utils/GetPokemonList";
import searchPokemon from "./utils/searchPokemon";
import { useState, useEffect } from "react";

function App() {
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);
  const [prevNext, setPrevNext] = useState({});
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (search) {
        const filteredPokemons = await searchPokemon(search);
        setPokemons(filteredPokemons);
        setPrevNext({});
      } else {
        const data = await getPokemonList(currentUrl);
        setPokemons(data.results);
        setPrevNext(data);
      }
    };

    fetchPokemons();
  }, [currentUrl, search]);

  const refreshList = ()=>{
    setIdx(idx+1);
  }
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
            <Header />
            <SearchBar search={search} setSearch={setSearch} />
              {!search && (
                <PrevNextButtons 
                  setCurrentUrl={setCurrentUrl} 
                  prevNext={prevNext}
                  refreshList={refreshList}
                />
              )}
              <PokemonList 
                key={idx}
                pokemons={pokemons}
                setSelectedPokemon={setSelectedPokemon}
              />
            </>
          } 
        />
        <Route 
          path="/details/:id" 
          element={<PokemonDetails selectedPokemon={selectedPokemon} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
