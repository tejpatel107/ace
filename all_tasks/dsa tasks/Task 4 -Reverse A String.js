

function reverseString(val){

    let i = 0;
    let j = val.length - 1;

    const array = Array.from(val);

    while (i < j) {

        temp = array[j];
        array[j] = array[i];
        array[i] = temp;

        i++;
        j--;
    }

    return array.join("");
}
console.log("Hello World");
console.log(reverseString("Hello World"));
