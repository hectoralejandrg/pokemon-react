const PokemonItem = ({ name, image, type }) => {
  
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={"Pokemon called " + name} />
      <h3>Type: {type}</h3>
    </div>
  );
};
export default PokemonItem;
