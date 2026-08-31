

function sortArraybasedOnProperty(arr, property) {
    
    return arr.sort((a, b) => {

        const propA = a[property];
        const propB = b[property];

        if (typeof propA === 'string' && typeof propB === 'string') {
            return propA.localeCompare(propB);
        }

        return propA - propB;

    });
}

// test cases

const arr1 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log(sortArraybasedOnProperty(arr1, "age")); // [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
console.log(sortArraybasedOnProperty(arr1, "name")); // [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
