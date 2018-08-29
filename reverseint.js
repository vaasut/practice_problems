var reverse = function(x) {
    if (x < 10 && x > -10){
        return x;
    }
    
    
    let neg = false;
    if (x < 0){
        x *= -1;
        neg = true;
    }
    
    let digits = 1;
    while (digits <= x){
            digits *= 10;
    }
    digits /= 10;
    
    let result = 0;
    let mult = 1;
    let temp = 0;
    while (x > 0 ){
        // console.log(result);
        // console.log(x);
        temp = (x/digits - ((x / digits) % 1));
        x -= (temp * digits);
        result += temp * mult;
        digits /= 10;
        mult *= 10;
    }
    
    if (result > 2147483648 || result < -2147483648){
        return 0;
    }
    
    else if (neg === true){
        return result * -1;
    }
    
    return result;
    
};