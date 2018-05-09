export const fetchApi = async (category) => {
  const url = `https://swapi.co/api/${category}`;
  const response = await fetch(url)
  const parsed = await response.json();
  return parsed;
}


