var climbStairs = function(n) {
    let stairs = [];
    stairs[0] = 0;
    stairs[1] = 1;
    stairs[2] = 2;
    for (let i = 3; i < n+1; i++){
        stairs[i] = stairs[i-1] + stairs[i-2]
    }
    return stairs[n];
    
};