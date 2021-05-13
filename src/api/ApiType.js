const baseUrl = "https://pokeapi.co/api/v2/";

const getTypes = async (type) => {
  const promise = await fetch(
    `${baseUrl}type/${encodeURIComponent(type.toLowerCase())}`
  ).then((res) => res.json());

  return promise;
};
export default getTypes;
