const getPokemon = (url) => {
  const promise = fetch(url).then((res) => res.json());

  return promise;
};
export default getPokemon;
