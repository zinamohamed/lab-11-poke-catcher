import { clearPokeStats, getPokeStats } from '../localStorage.js';
import { renderSeenArray, renderCaughtArray, renderLabelsArray } from './utils.js';


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

const pokeStats = getPokeStats();

var ctx = document.getElementById('pokeChart').getContext('2d');

var pokeChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: renderLabelsArray(pokeStats), 
        datasets: [
            {
                label: 'Times Seen',
                data: renderSeenArray(pokeStats), 
                backgroundColor: 'rgba(199, 160, 8, 0.2)',
                borderColor: 'rgba(255, 203, 5, 1)',
                borderWidth: 2
            },
            {
                label: 'Times Caught',
                data: renderCaughtArray(pokeStats), 
                backgroundColor: 'rgba(60, 90, 166, 0.2)',
                borderColor: 'rgba(42, 117, 187, 1)',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});