export const fetchApi = async (category) => {
  try {
  const url = `https://swapi.co/api/${category}`;
  const response = await fetch(url)
  const parsed = await response.json();
  return parsed;
  } catch(error) {
    throw new Error('Initial fetch failed')
  }
}


