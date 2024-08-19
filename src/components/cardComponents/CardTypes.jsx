import { useEffect, useState } from "react"
import getPokemonTypes from "../../utils/getPokemonTypes";


const CardTypes = ({pokemonInfo}) => {
  const [types, setTypes] = useState([]);
  useEffect(()=>{
    const fetchTypes = async()=>{
      const data = await getPokemonTypes(pokemonInfo.types);
      setTypes(data);
    }
    fetchTypes();
  },[pokemonInfo])

  return (
    <div className="relative flex w-full justify-center mb-5">
      {types.map((type, index)=>(
        <img key={index} src={type} alt="type-img" />
      ))}
    </div>
  )
}

export default CardTypes