// the function return pair of indices and not the pair of values.

function findPairs(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]),i];
        }
        map.set(nums[i], i);
    }
}

console.log(findPairs([23,46,124,7,4,94,9,0,3],13));
