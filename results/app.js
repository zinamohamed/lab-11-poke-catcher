import { identifyPokeById } from '../utils.js';
import { renderResults } from './results.js';
import { getPokeStats } from '../localStorage.js';
import pokeData from '../pokeData.js';




const table = document.getElementById('table');

const pokemon = getPokeStats();



for (let item of pokemon) {
    
    const actualPokemon = identifyPokeById(pokeData, item._id);

    const tableRowDom = renderResults(item, actualPokemon);

    table.append(tableRowDom);


}

