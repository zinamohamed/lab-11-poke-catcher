import pokeData from './pokeData.js';

export function getRandomPokemon() {
  
  // Make sure the Pokemon are generated randomly by using a function //
  
    const generateRandom = Math.floor(Math.random() * pokeData.length);

  // to ensure that it is a random selection utilize Math.floor //

    return pokeData[generateRandom];

  // return randomly generated Pokemon

}

export function identifyPokeById(array, id) {
  // this function should take in pokeData, and a unique id and return a pokemon with that unique ID. similiar to our findById function for our shopping cart //

    for (let item of array) {
        if (item._id === id) return item;
    }

}

export function displayPokeImg(pokeItem) {
  // This function should render a pokemon image utilizing pokeData. The img src should coresspond to the 'url_image given in the data set. //

    const pokeImage = document.createElement('img');

    // create img element using .createElement //

    pokeImage.src = pokeItem.url_image;

    return pokeImage;
}

export function displayThreeRandomPokemon() {
   // utlize getRandomPokemon function and render three unique random pokemon //
    let firstPoke = getRandomPokemon();
    let secondPoke = getRandomPokemon();
    let thirdPoke = getRandomPokemon();

    // make sure that each pokemon displayed is different by comparing their id's and making sure they are not the same //

    while (firstPoke._id === secondPoke._id || firstPoke._id === thirdPoke._id || secondPoke._id === thirdPoke._id) {
        firstPoke = getRandomPokemon();
        secondPoke = getRandomPokemon();
        thirdPoke = getRandomPokemon();
    }

    const firstImage = displayPokeImg(firstPoke);
    const secondImage = displayPokeImg(secondPoke);
    const thirdImage = displayPokeImg(thirdPoke);

    const div = document.getElementById('pokemon');

    div.textContent = '';
    
    div.append(firstImage, secondImage, thirdImage);
}