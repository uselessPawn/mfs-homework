// Runtime: 64 ms, faster than 97.82% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.9 MB, less than 36.54% of JavaScript online submissions for Search Insert Position.
// Next challenges:


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
        if (nums[mid] < target) {
            if (!nums[mid + 1] || nums[mid + 1] > target) {
                return mid + 1;
            }
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        } else if (nums[mid] > target) {
            if (!nums[mid - 1] || nums[mid - 1] < target) {
                return mid;
            }
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else {
            return mid;
        }
    }
};


// Runtime: 76 ms, faster than 59.73% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.9 MB, less than 36.54% of JavaScript online submissions for Search Insert Position.

// var searchInsert = function (nums, target) {
//     let left = 0, right = nums.length - 1;
//     let mid = Math.floor((left + right) / 2)
//     while (left < right) {
//         if (nums[mid] < target) {
//             left = mid + 1;
//             mid = Math.floor((left + right) / 2);
//         } else if (nums[mid] > target) {
//             right = mid - 1;
//             mid = Math.floor((left + right) / 2);
//         } else {
//             return mid;
//         }
//     }
//     if (nums[left] < target)
//         return left + 1;
//     return left;
// };

console.log(searchInsert([1, 3, 5, 6], 7))