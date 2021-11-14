// Runtime: 80 ms, faster than 88.95% of JavaScript online submissions for 3Sum Closest.
// Memory Usage: 40.6 MB, less than 34.05% of JavaScript online submissions for 3Sum Closest.

var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let result
    let df;
    let newDf;
    for (let left = 0, l = nums.length; left < l - 2; left++) {
        let mid = left + 1;

        let right = l - 1;
        let sum = nums[left] + nums[mid] + nums[right];

        while (mid < right) {
            sum = nums[left] + nums[mid] + nums[right];
            newDf = sum - target;

            if (!df || Math.abs(newDf) < Math.abs(df)) {
                result = sum;
                df = newDf;
            }

            if (newDf > 0) {
                let cur = nums[right]
                while (cur === nums[right]) right--;
            } else if (newDf < 0) {
                let cur = nums[mid]
                while (cur === nums[mid]) mid++;
            } else {
                return result;
            }

        }
    }
    return result;
};

console.log(threeSumClosest([0, 2, 1, -3], 1))