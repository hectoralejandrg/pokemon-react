import { useState, useEffect } from "react";
import getPokemon from "../api/ApiPokemon";
import PokemonItem from "./PokemonItem";

const Pokemon = ({ url }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    if (url) {
      getPokemon(url)
        .then(data => {
          setName(data.name)
          setImage(data.sprites.front_default)
          setType(data.types[0].type.name)
        })
    }
  })
  return <PokemonItem name={name} image={image} type={type} />
};
export default Pokemon;
