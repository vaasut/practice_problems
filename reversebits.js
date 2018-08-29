/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if (n===0){
        return 0;
    }
    
    let top = 2**31;
    let bottom = 1;
    let result = 0;
    while (n > 0){
        if (n-top >= 0){
            result += bottom;
            n -= top;
        }
        top /=2;
        bottom *=2;
    }
    return result;
};