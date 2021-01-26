## Poke Catcher Layout
  - An app that tracks # of pokemon caught
  - How much of each pokemen that the user has caught.
  - How many times the user has seen a specific pokemon.

## HTML SETUP 
  - Start Game! 
  - Instructions
  - Create div to display pokemon

add results.html and style results page so that user can read results effectively

## JS SETUP 
  - When a user clicks on a pokemon three random new non-duplicating pokemen should be displayed on the page. 
    - Make sure the Pokemon are generated randomly by using a function such as 'getRandomPokemon()';
        - This function should take in pokemon data, and return a unique pokemon at random.
    - Make sure the three Pokemon are all different by looking at thier ID's using a function such as
    'identifyPokemonById()';
        - This function should take in pokemon data, and a unique id and return a pokemon with that unique ID.
    - Display each pokemon's unique image by using a function such as displayPokeImg
        - This function should render a pokemon image utilizing Pokemon data. The img src should coresspond to the 'url_image given in the data set. 
    - When a specific Pokemon image is clicked, is should be stored in the local storage as "caught".
    - When a pokemon is displayed to the user, it should be stored in local storage as "seen".

  /results page 
    - When user plays 10 times, trigger a results page that displays how many pokemon were captured by user, and how many were not. 
    - Add button that allows user to play again, and clear local storage on click.