import { useEffect, useState } from "react";
import getTypes from "../api/ApiType";
import Pokemon from "./Pokemon";
import Search from "./Search";

const Pokedex = () => {
  const [query, setQuery] = useState('');
  const [numOfPokemons, setNumOfPokemos]= useState(10)
  const [url, setUrl] = useState([]);
  

  useEffect(() => {
    if(query){
      getTypes(query).then((data) => {
        console.log(data.pokemon.splice(0, 10))
        setUrl(data.pokemon.splice(0, numOfPokemons))
      })
    }
  }, [query, numOfPokemons]);

  const listPokemon = url.map((element, index) => {
    return <Pokemon url={element.pokemon.url} key={url[index].pokemon.name} />
  })

  return <div>
    <div>
      <Search handleSearch={setQuery} handleChangeAmount={setNumOfPokemos}/>
    </div>
    <div className="container">
      {listPokemon}
    </div>
  </div>;
};
export default Pokedex;
