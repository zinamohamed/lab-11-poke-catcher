import pokeData from './pokeData.js';
let turns = 0;

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
    
    // add event listener to image click so that every time a user clicks a pokeImage it renders a new set of pokemon using the displayThreeRandomPokemon function //
    
    pokeImage.addEventListener('click', () => {
        if (turns < 10) {
            displayThreeRandomPokemon();
        }

        // if the player has already played 10 turns re-direct them to a results page //
        else {
            window.location = '../results/index.html';
        }
    });

    return pokeImage;
}

export function displayThreeRandomPokemon() {
  // increment ammount of turns player has gone //
    turns++;
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
    
    div.append(firstImage, secondImage, thirdImage);
}