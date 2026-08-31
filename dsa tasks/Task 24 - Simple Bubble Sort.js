

function bubbleSort(array) {

    const size = array.length;

    for (let i = 0; i < size - 1; i++) {

        for (let j = 0; j < (size - 1) - i; j++) {

            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }

        }

    }

    return array;
}

console.log(bubbleSort([4, 1, 5, 2, 3]));

console.log(bubbleSort([9,1,8,2,7,3,6,4,5,0]));

