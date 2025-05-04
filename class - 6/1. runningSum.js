/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let res = [];
  res[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let prev = res[i - 1];
    let curr = nums[i];

    let sum = prev + curr;

    res[i] = sum;
  }

  return res;
};
