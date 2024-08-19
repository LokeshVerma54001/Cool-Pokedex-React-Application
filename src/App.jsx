import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import getPokemonList from "./utils/GetPokemonList";
import SearchBar from "./components/SearchBar";
import PrevNextButtons from "./components/PrevNextButtons";

function App() {
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);
  const [prevNext, setPrevNext] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemonList(currentUrl);
      setPrevNext(data);
      setPokemons(data.results);
    };
    fetchPokemons();
  }, [currentUrl]);

  const refreshList = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <SearchBar />
      <PrevNextButtons 
        setCurrentUrl={setCurrentUrl} 
        prevNext={prevNext}
        refreshList={refreshList}
      />
      <PokemonList 
        key={refreshKey}
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;
