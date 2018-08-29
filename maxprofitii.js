/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
    let length = prices.length;

        let profit = 0;
        for (let i = 1; i < length; i++){
            if (prices[i] > prices[i-1]){
                profit += (prices[i] - prices[i-1])
            }
        }
        return profit;

};