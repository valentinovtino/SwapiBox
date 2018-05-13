export const mockPeople = [ 
    {
        CharacterName: "Luke Skywalker",
        HomeWorld: "Tatooine",
        Population: "200000",
        species: "Human"
    }, 
    {
        CharacterName: "C-3PO",
        HomeWorld: "Tatooine",
        Population: "200000",
        species: "Droid"
    }
]

export const mockPeopleObj = {
    results: [
        { 
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ]
         }
    ]
}

export const mockHomeWorld = {
    "name": "Tatooine", 
    "rotation_period": "23", 
    "orbital_period": "304", 
    "diameter": "10465", 
    "climate": "arid", 
    "gravity": "1 standard", 
    "terrain": "desert", 
    "surface_water": "1", 
    "population": "200000", 
    "residents": [
        "https://swapi.co/api/people/1/", 
        "https://swapi.co/api/people/2/", 
        "https://swapi.co/api/people/4/", 
        "https://swapi.co/api/people/6/", 
        "https://swapi.co/api/people/7/", 
        "https://swapi.co/api/people/8/", 
        "https://swapi.co/api/people/9/", 
        "https://swapi.co/api/people/11/", 
        "https://swapi.co/api/people/43/", 
        "https://swapi.co/api/people/62/"
    ], 
    "films": [
        "https://swapi.co/api/films/5/", 
        "https://swapi.co/api/films/4/", 
        "https://swapi.co/api/films/6/", 
        "https://swapi.co/api/films/3/", 
        "https://swapi.co/api/films/1/"
    ], 
    "created": "2014-12-09T13:50:49.641000Z", 
    "edited": "2014-12-21T20:48:04.175778Z", 
    "url": "https://swapi.co/api/planets/1/"
}

export const mockPlanetObj = {
    results: [
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/68/", 
                "https://swapi.co/api/people/81/",
                
            ], 
            "films": [
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.co/api/planets/2/"
        }
    ]
}

export const mockPlanets = [
    {
      name:'earth',
      terrain: 'rocky',
      climate: 'moderate',
      population: 12,
      residents: [`https://swapi.co/api/people/5`]
    },
    {
      name: 'mars',
      terrain: 'sandy',
      climate: 'hot',
      population: 29333,
      residents: [`https://swapi.co/api/people/4`]
    }
  ];