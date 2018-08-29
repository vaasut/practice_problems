/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    length = digits.length;
    
    if (digits[length-1] === 9){
        if (length === 1){
            return [1,0];
        }
        else{
            return plusOne(digits.slice(0,length-1)).concat([0]);
        }
    }
    
    else{
        digits[length - 1] = digits[length - 1] + 1;
        return digits;
    }
};