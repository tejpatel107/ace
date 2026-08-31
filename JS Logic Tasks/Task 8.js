// Task 8 - All Permutations of an Array

function permute(nums) {
    const space = [];
    backtrack(space, [], nums);
    return space;
}

function backtrack(space, temp, nums) {

    if (temp.length === nums.length) {
        space.push([...temp]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {

        if (temp.indexOf(nums[i]) === -1) {
            temp.push(nums[i]);
            backtrack(space, temp, nums);
            temp.pop();
        }
    }
}