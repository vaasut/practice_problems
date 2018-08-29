/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //annoying corner cases*******
    if (nums.length === 0){
        return 0;
    }
    else if (nums.length === 1){
        return nums[0];
    }
    else if (nums.length === 2){
        if (nums[1] > nums[0]){
            return nums[1];
        }
        else{
            return nums[0];
        }
    }
    //********************
    else{
        max_back2 = nums[0];
        if (nums[1] > nums[0]){
            max_back1 = nums[1];
        }
        else{
            max_back1 = nums[0];
        }
        let max = 0;
        for (let i = 2; i < nums.length; i++){
            if (nums[i] + max_back2 > max_back1){
                max = max_back2 + nums[i];
            }
            else{
                max = max_back1;
            }
            
            max_back2 = max_back1;
            max_back1 = max;
        }
        return max;
    }
    
};