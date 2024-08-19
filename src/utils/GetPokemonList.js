const getPokemonList = async(url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Failed to fetch Pokémon data", error);
      return [];
    }
}

export default getPokemonList;
