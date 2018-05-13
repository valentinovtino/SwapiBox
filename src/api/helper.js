import { fetchApi, singleUrl} from './api'

export const getHomeWorld = async (categoryObj) => {
  
   try { 
    const categoryArray = categoryObj.results;
    
  
    const unresolvedPromises = categoryArray.map( async (peopleKey) => {
      const data = await singleUrl(peopleKey.homeworld)
      // const data = await response.json()
  
      return { 
        dynamic1: peopleKey.name, 
        dynamic2: data.name, 
        dynamic3: data.population 
      }
    })

    return await Promise.all(unresolvedPromises)
  
  } catch(error) {
      throw new Error('Fetch failed')
  } 
}

export const getSpecies = async (categoryData) => {

  try{
    const categoryArray = categoryData.results
    const unresolvedPromises = await categoryArray.map( async (peopleKey) => {
      const data = await singleUrl(peopleKey.species)
      // const data = await response.json()

  
      return {dynamic4: data.name}
    })
    return await Promise.all(unresolvedPromises)
    } catch(error) {
      throw new Error('unsuccessful fetch for species')
    }
  }

  const getPlanetResidents = async (residents) => {
    const unresolvedPromises = residents.map( async (resident) => {
      const response = await singleUrl(resident)
      // const name = await response.json()
      return response;
    })

    return await Promise.all(unresolvedPromises);
  } 

  export const getPlanetDetails = async (categoryData) => {
    const categoryArray = categoryData.results
    
    const unresolvedPromises = categoryArray.map( async (planet) => { 
      const { name, terrain, climate, population, residents } = planet;
     
      const residentArr = await getPlanetResidents(residents);
      const residentName = residentArr.map((resident) => {
        return resident.name
      })

      return {
        dynamic1: name,
        dynamic2: climate,
        dynamic3: terrain, 
        dynamic4: population,
        dynamic5: residentName.join(', ')
      }
    })
    return await Promise.all(unresolvedPromises)
  }


export const getVehicleDetails = (categoryObj) => {
  const categoryArray = categoryObj.results;

  const stuff = categoryArray.map( (car) => {
     const { name, model, manufacturer, passengers } = car;
     return {
       dynamic1: car.name,
       dynamic2: car.model,
       dynamic3: car.manufacturer,
       dynamic4: car.passengers
     }
  })

  return stuff
}
 