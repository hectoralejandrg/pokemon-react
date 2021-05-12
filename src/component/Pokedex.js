import { useEffect, useState } from "react";
import getTypes from "../api/ApiType";
import getPokemon from "../api/ApiPokemon";

const Pokedex = () => {
  const [types, setTypes] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const arr = [];
    getTypes("grass").then((data) => {
      for (let i = 0; i < 10; i++) {
        //console.log("url", data.pokemon[i].pokemon.url);
        getPokemon(data.pokemon[i].pokemon.url).then((data) => {
          //pokemon.push(data);
          setPokemon(arr.push(data));
          console.log(i, arr);
        });
      }
    });
  });

  return <div></div>;
};
export default Pokedex;
