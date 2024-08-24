// utils/searchPokemon.js

export default async function searchPokemon(query) {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const data = await response.json();
      const filteredPokemons = data.results.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
        pokemon.url.split('/')[6] === query
      );
  
      return filteredPokemons;
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      return [];
    }
  }
  