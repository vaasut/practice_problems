/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let inc = k % nums.length;  // for if k > nums.length
    let spot = 0;
    let swaps = 0;
    let temp = 0;
    
    while (swaps < nums.length - 1){
        temp = nums[inc];
        nums[inc] = nums[spot];
        nums[spot] = temp;
        inc += k;
        swaps ++;
        
        if (spot === (inc % nums.length)){
            spot ++;
            inc = k + spot;
            swaps++;
        }
        inc = inc % nums.length;
    }
};