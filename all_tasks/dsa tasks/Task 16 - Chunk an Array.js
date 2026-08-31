

function createChunks(array, size) {
    
    const chunks = [];
    
    let i = 0;
    while (i < array.length) {
        chunks.push(array.slice(i, i + size));
        console.log(i, array.slice(i, i + size));
        i += size;
    }
    return chunks;
}

console.log(createChunks([1,2,3,4,5,6,7,8,9,10,11],3));
// [[1,2,3],[4,5,6],[7,8,9],[10,11]]

console.log(createChunks([1,2,3,4,5],2));
// [[1,2],[3,4],[5]][array]