export const getHomeWorld = (categoryObj) => {
   try { const categoryArray = categoryObj.results;
  
    const unresolvedPromises = categoryArray.map( async (peopleKey) => {
      const response = await fetch(peopleKey.homeworld)
      const data = await response.json()
  
      return { CharacterName: peopleKey.name, HomeWorld: data.name, Population: data.population }
    })
  
    return Promise.all(unresolvedPromises)
  } catch(error) {
      throw new Error('Fetch failed')
  } 
}

export const getSpecies = (categoryData) => {
    const categoryArray = categoryData.results
    const unresolvedPromises = categoryArray.map( async (peopleKey) => {
      const response = await fetch(peopleKey.species)
      const data = await response.json()
  
      return {species: data.name}
    })
    return Promise.all(unresolvedPromises)
  }