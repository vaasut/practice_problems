var countPrimes = function(n) {
    primes = [];
    // for (let i = 2; i < n; i++){
    //     primes.push(i);
    // }
    
    let count = 0;
    for (let i = 0; i < n-2; i++){
        if (primes[i] !== -1){
            count += 1;
            let j = i+2;
            for (let k = i+j; k < n; k += j){
                primes[k] = -1;
            }
        }
    }

    return count;
};