import { clearPokeStats } from '../localStorage.js';

export function renderResults(pokeData, pokemon) {
    const tr = document.createElement('tr');
  
   
    const tdImg = document.createElement('img');
    tdImg.src = pokemon.url_image;
    tr.append(tdImg);
    
    const tdPoke = document.createElement('td');
    tdPoke.textContent = pokemon.pokemon;
    tr.append(tdPoke);

    const tdCaught = document.createElement('td');
    tdCaught.textContent = pokeData.caught;
    tr.append(tdCaught);


    const tdSeen = document.createElement('td');
    tdSeen.textContent = pokeData.seen;
    tr.append(tdSeen);

    return tr;
}

const playAgainButton = document.getElementById('play-again');

playAgainButton.addEventListener('click', () => {
    clearPokeStats();
});

