/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    spot = 0;
    length = nums.length;
    
    for (let i = 0; i < length; i++){
        if (nums[i] !== 0){
            nums[spot] = nums[i];
            spot += 1;
        }
    }
    for (let j = spot; j < length; j++){
        nums[j] = 0;
    }
};