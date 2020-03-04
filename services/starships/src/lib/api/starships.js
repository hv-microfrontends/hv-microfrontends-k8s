const fetchStarships = async () => {
  const res = await fetch("https://swapi.co/api/starships");
  return await res.json();
};

const fetchStarshipsDetails = async id => {
  const res = await fetch(`https://swapi.co/api/starships/${id}`);
  return await res.json();
};

export { fetchStarships, fetchStarshipsDetails };
