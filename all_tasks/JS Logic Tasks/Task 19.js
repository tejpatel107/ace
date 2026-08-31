// Task 19 - Partition an Array into K Equal-Sum Subsets

var canPartitionKSubsets = function (nums, k) {

    const total = nums.reduce((acc, curr) => acc + curr, 0);

    if (total % k !== 0) {
        return false;
    }

    const target = total / k;

    nums.sort((a, b) => b - a);

    if (nums[0] > target) {
        return false;
    }

    const used = new Array(nums.length).fill(false);

    function backtrack(start, currentSum, subsetsFormed) {

        // All k subsets have been created
        if (subsetsFormed === k) {
            return true;
        }

        // Current subset is complete
        if (currentSum === target) {
            return backtrack(0, 0, subsetsFormed + 1);
        }

        for (let i = start; i < nums.length; i++) {

            if (used[i]) {
                continue;
            }

            if (currentSum + nums[i] > target) {
                continue;
            }

            used[i] = true;

            if (backtrack(
                i + 1,
                currentSum + nums[i],
                subsetsFormed
            )) {
                return true;
            }

            used[i] = false;
        }

        return false;
    }

    return backtrack(0, 0, 0);
};