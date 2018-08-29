/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let a1 = m-1;
    let a2 = n-1;
    for (let i = a1+a2+1; i >= 0; i--){
        if (a1 < 0){
            nums1[i] = nums2[a2];
            a2 --;
        }
        
        else if (a2 < 0){
            return;
        }
        
        else if (nums1[a1] > nums2[a2]){
            nums1[i] = nums1[a1];
            a1 --;
        }
        else{
            nums1[i] = nums2[a2];
            a2 --;
        }
        
    }
};