

function countWords(sentence) {

    const words = sentence.toLowerCase().split(/[\s,!.?]+/).filter(Boolean);
    const map = new Map();

    for (const word of words) {
        map.set(word,(map.get(word) || 0) + 1);
    }

    return Object.fromEntries(map);
}

console.log(countWords("Humpty Dumpty sat on a wall, Humpty Dumpty fell off the wall, Humpty Dumpty broke his head!"));

console.log(countWords("The quick brown fox jumps over the lazy dog. The quick brown fox is very quick."));

console.log(countWords("The cat sat on the mat. The cat, the dog, and the mouse all sat there together."));

/*
    { "the": 5, "cat": 2, "sat": 2, "on": 1, "mat": 1, "dog": 1, "and": 1, "mouse": 1, "all": 1, "there": 1 }
*/