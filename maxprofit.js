var maxProfit = function(prices) {
    let minsofar = Number.MAX_VALUE;
    let maxprofit = 0;
    let difference = 0;
    
    for (let i = 0; i < prices.length; i++){
        let current = prices[i];
        if (current < minsofar){
            minsofar = current;
        }
        else{
            difference = current - minsofar;
            if (difference > maxprofit){
                maxprofit = difference;
            }
        }
    }
    return maxprofit;
    
};