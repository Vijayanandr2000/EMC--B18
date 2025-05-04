/**
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let f = nums[i];
      let s = nums[j];

      let sum = f + s;

      if (sum === target) {
        return [i, j];
      }
    }
  }
};
