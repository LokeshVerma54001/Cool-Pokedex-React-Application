import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import getPokemonList from "./utils/GetPokemonList";
import searchPokemon from "./utils/searchPokemon";
import SearchBar from "./components/SearchBar";
import PrevNextButtons from "./components/PrevNextButtons";

function App() {
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = useState([]);
  const [prevNext, setPrevNext] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);
  const [search, setSearch] = useState("");

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

  const refreshList = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
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
        key={refreshKey}
        pokemons={pokemons}
      />
    </div>
  );
}

export default App;
