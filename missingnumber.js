/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    let current = 0;
    for(let i = 0; i < nums.length; i++){
        sum += i;
        current += nums[i];
    }
    sum += nums.length;
    return (sum - current);
};