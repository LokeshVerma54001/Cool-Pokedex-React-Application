import { useEffect, useState } from "react";
import getPokemonCard from "../utils/getPokemonCard";
import { motion } from "framer-motion";

const PokemonCard = ({index , pokemon }) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const pokemonData = await getPokemonCard(pokemon.url);
                setPokemonInfo(pokemonData);
            } catch (error) {
                console.error("Failed to fetch Pokémon data", error);
            }
        };
        fetchPokemonData();
    }, [pokemon.url]);

    if (!pokemonInfo) return <div></div>;

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
        className="relative rounded-lg flex flex-col items-center">
            <div className="h-40 bottom-0 rounded-lg absolute bg-green-500 w-full"></div>
            <img
                src={pokemonInfo.sprites.front_default}
                alt={pokemon.name}
                className="relative z-10 size-60"
            />
            <div className="relative z-10 mt-4 text-center text-lg font-bold">{pokemon.name}</div>
        </motion.div>
    );
}

export default PokemonCard;
