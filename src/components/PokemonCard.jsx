import { useEffect, useState } from "react";
import getPokemonCard from "../utils/getPokemonCard";
import { motion } from "framer-motion";
import CardTypes from "./cardComponents/CardTypes";

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
            <div className="h-2/3 bottom-0 rounded-lg absolute bg-green-500 w-full"></div>
            {/* <div className="size-72 bg-green-300 absolute rounded-full"></div>
            <div className="size-60 bg-green-500 absolute top-5 rounded-full"></div>
            <div className="size-24 bg-green-300 absolute top-28 rounded-full"></div>
            <div className="h-1/3 top-0 rounded-lg absolute bg-gray-100 w-full"></div> */}
            <img
                src={pokemonInfo.sprites.front_default}
                alt={pokemon.name}
                className="  relative z-10 size-52"
            />
            <div className="flex items-center gap-2 mb-4">
                <h2 className="relative text-white font-bold text-xl" >#{pokemonInfo.id}</h2>
                <h2 className="text-white relative text-2xl  text-center font-bold w-full">{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
            </div>
            <CardTypes
                pokemonInfo={pokemonInfo}
            />
            
        </motion.div>
    );
}

export default PokemonCard;
