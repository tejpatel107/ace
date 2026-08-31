// Task 4 Deep Merge Two Objects

const isObj = obj => obj && typeof obj === 'object';
const isArr = arr => Array.isArray(arr);

function deepMergeObjects(obj1, obj2) {

    if (!isObj(obj1) || !isObj(obj2)) {
        return obj2;
    }

    if(isArr(obj1) !== isArr(obj2)) {
        return obj2;
    }

    for (const key in obj2) {
        obj1[key] = deepMergeObjects(obj1[key], obj2[key]);
    }

    return obj1;
}


/**
 * Example usage: */
let obj1 = {"a": 1, "c": 3}, obj2 = {"a": 2, "b": 2};
console.log(deepMergeObjects(obj1, obj2)); // {"a": 2, "c": 3, "b": 2}
 