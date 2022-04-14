/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0, minBuy = prices[0];
    for (let i = 1;  i < prices.length; i++){
        if (prices[i] < minBuy){
            minBuy = prices[i];
        } else if (prices[i] - minBuy > res){
            res = prices[i] - minBuy;
        }
    }
    return res;
};