import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPokemonCard from '../utils/getPokemonCard';
import CardTypes from './cardComponents/CardTypes';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonData = await getPokemonCard(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonInfo(pokemonData);
      } catch (error) {
        console.error("Failed to fetch Pokémon data", error);
      }
    };
    fetchPokemonData();
  }, [id]);

  if (!pokemonInfo) return <div>Loading...</div>;

  return (
    <div className=' bg-gray-600 h-full w-full flex justify-center items-center'>
      <div className=' relative bg-white h-5/6 w-5/6 sm:w-2/4 lg:w-1/3 shadow-lg rounded-lg flex flex-col justify-center items-center gap-10'>
        <div className='absolute w-[95%] h-1/3 bg-orange-500 top-2 rounded-t-md'></div>
        <div className='w-[95%] h-[97%] ring ring-orange-500 rounded-md absolute'></div>
        <h1 className='font-semibold text-2xl left-5 absolute top-5 text-white'>{pokemonInfo.forms['0'].name[0].toUpperCase() + pokemonInfo.forms['0'].name.substring(1)}</h1>
        <img src={pokemonInfo.sprites.versions['generation-v']['black-white'].animated.front_default} alt="pokemon-gif" className='size-44 relative'/>
        <div className='flex flex-col relative items-center'>
        <CardTypes pokemonInfo={pokemonInfo}/>
          <h2 className='text-2xl text-orange-500 font-bold'>Base Stats</h2>
          <div className='grid grid-cols-2 w-full mt-5 gap-5'>
            <div className='flex justify-between items-center gap-3'>
              <h2 className='text-orange-500 font-semibold'>{pokemonInfo.stats['0'].stat.name.toUpperCase()}:</h2>
              <p className='font-semibold text-sm'>{pokemonInfo.stats['0'].base_stat}</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
              <h2 className='text-orange-500 font-semibold'>{pokemonInfo.stats['1'].stat.name.toUpperCase()}:</h2>
              <p className='font-semibold text-sm'>{pokemonInfo.stats['1'].base_stat}</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
              <h2 className='text-orange-500 font-semibold'>{pokemonInfo.stats['2'].stat.name.toUpperCase()}:</h2>
              <p className='font-semibold text-sm'>{pokemonInfo.stats['2'].base_stat}</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
              <h2 className='text-orange-500 font-semibold'>{pokemonInfo.stats['3'].stat.name.toUpperCase()}:</h2>
              <p className='font-semibold text-sm'>{pokemonInfo.stats['3'].base_stat}</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
              <h2 className='text-orange-500 font-semibold'>{pokemonInfo.stats['4'].stat.name.toUpperCase()}:</h2>
              <p className='font-semibold text-sm'>{pokemonInfo.stats['4'].base_stat}</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
              <h2 className='text-orange-500 font-semibold'>{pokemonInfo.stats['5'].stat.name.toUpperCase()}:</h2>
              <p className='font-semibold text-sm'>{pokemonInfo.stats['5'].base_stat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
