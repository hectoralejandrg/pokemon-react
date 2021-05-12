const PokemonItem = ({ name, image, type }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={"Pokemon called " + name} />
      <h2>{type}</h2>
    </div>
  );
};
export default PokemonItem;
