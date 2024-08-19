
const getPokemonCard = async(url) => {
    try {
        const data = await fetch(url);
        const pokemonData = await data.json();
        return pokemonData;
    } catch (error) {
        console.log(error.message);
        return {};
    }
}

export default getPokemonCard