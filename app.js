// import functions and grab DOM elements
import { displayThreeRandomPokemon } from './utils.js';
const gamePlay = document.getElementById('main-section');
const startGameSection = document.getElementById('start-game-page');
const instructionsGameSection = document.getElementById('instructions-game-page');
const startGameButton = document.getElementById('start-game');
const goGameButton = document.getElementById('go-game');


// initialize state
gamePlay.style.display = 'none';
instructionsGameSection.style.display = 'none';
// set event listeners to update state and DOM

startGameButton.addEventListener('click', () => {
    instructionsGameSection.style.display = 'flex';
    startGameSection.style.display = 'none';
    
});

goGameButton.addEventListener('click', () => {
    instructionsGameSection.style.display = 'none';
    startGameSection.style.display = 'none';
    instructionsGameSection.display = 'none';
    gamePlay.style.display = 'block';
  
});

displayThreeRandomPokemon();