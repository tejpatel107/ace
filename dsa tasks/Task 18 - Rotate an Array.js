

function rotateAnArray(array,pos) {
    
    if (pos > array.length) {
        return array;
    }

    return array.toSpliced(0, pos).concat([...array.slice(0,pos)]);
}

console.log(rotateAnArray([1,2,3,4,5,6],4));