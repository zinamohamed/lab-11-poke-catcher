export function renderSeenArray(pokeData) {
  
    const seenArray = [];

  
    for (let item of pokeData) {
      // and push every 'seen' into our new array
        seenArray.push(item.seen);
    }

  
    return seenArray;
}

export function renderCaughtArray(pokeData) {

  
    const caughtArray = [];

  
    for (let item of pokeData) {
      
        caughtArray.push(item.caught);
    }

  
    return caughtArray;
}


export function renderLabelsArray(pokeData) {

  
    const nameArray = [];

  
    for (let item of pokeData) {
      
        nameArray.push(item.name);
    }

  
    return nameArray;
}