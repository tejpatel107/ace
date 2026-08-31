


function groupElemmentsByCriteria(arr, criteria) {

    const group1 = arr.filter(element => criteria(element) );
    const group2 = arr.filter(element => !criteria(element) );

    return [group1, group2];
}


criteria = function (value) {
    return value % 3 === 0;
};

 // [[3, 6], [1, 2, 4, 5]]

console.log(groupElemmentsByCriteria([1, 2, 3, 4, 5, 6], criteria));
console.log(groupElemmentsByCriteria([1, 2, 3, 4, 5, 6], (value) => value % 2 === 0)); // [[2, 4, 6], [1, 3, 5]]
console.log(groupElemmentsByCriteria([1, 2, 3, 4, 5, 6], (value) => value > 3)); // [[4, 5, 6], [1, 2, 3]]


arr = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "Eve", age: 45 }
];

console.log(groupElemmentsByCriteria(arr, (person) => person.age > 30)); // [[{ name: "Charlie", age: 35 }, { name: "David", age: 40 }, { name: "Eve", age: 45 }], [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]]
