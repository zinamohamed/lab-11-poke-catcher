import pokeData from './pokeData.js';

export function getRandomPokemon() {
  
  // Make sure the Pokemon are generated randomly by using a function //
  
    const currentPokemon = pokeData(Math.floor(Math.random() * pokeData.length));

  // to ensure that it is a random selection utilize Math.floor //

    return currentPokemon;

  // return randomly generated Pokemon

}