// Runtime: 140 ms, faster than 85.64% of JavaScript online submissions for 3Sum.
// Memory Usage: 48.1 MB, less than 98.28% of JavaScript online submissions for 3Sum.

var threeSum = function (nums) {
    let l = nums.length;
    let result = []
    if (l < 3) return result;

    nums = nums.sort((a, b) => a - b)
    let i = 0;
    while (i < l) {
        let target = - nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] < target) {
                j++;
            } else if (nums[j] + nums[k] > target) {
                k--;
            } else if (nums[j] + nums[k] === target) {
                result.push([-target, nums[j], nums[k]])
                let cur = nums[j];
                while (cur === nums[j]) j++;
            }
        }
        let cur = nums[i];
        while (cur === nums[i]) i++;
    }
    return result;
};

console.log(threeSum([1,2,-2,-1]))
