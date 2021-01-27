export function makeSeenArray(array) {
    const seenArray = [];

    for (let item of array) {
        seenArray.push(item.seen);
    }

    return seenArray;
}

export function makeLabelsArray(array) {
    const nameArray = [];

    for (let item of array) {
        nameArray.push(item.name);
    }
}

export function makeCaughtArray(array) {
    const caughtArray = [];

    for (let item of array) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}