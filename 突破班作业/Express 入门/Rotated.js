// Runtime: 72 ms, faster than 87.63% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 40.3 MB, less than 11.98% of JavaScript online submissions for Search in Rotated Sorted Array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) return mid;
        if (nums[mid] < nums[right]) { // 右边有序
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        } else if (nums[mid] > nums[right]) { // 左边有序
            if (target < nums[mid] && target >= nums[left]) right = mid - 1;
            else left = mid + 1;
        } else {
            return -1;
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 3))

// 起始思路，先找到旋转点，再找目标数字
// 进阶思路
// 如果 nums[mid]  < nums[right] ，说明右边是有序的
// 继续判断 nums[mid] 和 target 


// 如果 nums[mid]  > nums[right] ，说明左边是有序的