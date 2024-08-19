import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  return (
    <div className=" w-5/6 mt-10 grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-5 overflow-auto">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} index={index} pokemon={pokemon} />
        ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonList;
