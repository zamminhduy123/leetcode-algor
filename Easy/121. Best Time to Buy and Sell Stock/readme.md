## Thought Process

### Bruteforce

Bruteforce first obviously. My initial bruteforce thought on this is just simply loop throught each day, find the max day on the right side of it, then make a subtract and compare to max.

Example code:

    	/**
 	* @param {number[]} prices
 	* @return {number}
 	*/
	var maxProfit = function(prices) {
    		let res = 0, max = 0;
    		for (let i = 0 ;  i < prices.length; i++){
        		if (i >= max){
            			max = i+1;
 	           		for (let j = i+1; j < prices.length; j++){
   	             			if (prices[j] > prices[max]){
  	                  			max = j;
   	             			}
   	         		}
      	  		}
      	  		if (prices[max] - prices[i] > res){
       	     			res = prices[max] - prices[i];
      	  		}
 		}
    		return res;
	};

The Complexity time is O(n^2). Even thought i tried to only find max if we pass through the max previos max position

### After BruteForce

After the engage with bruteforce, i realize that we don't need to keep track of the max behind the current loop through item, we just need to keep track of the minium price day that we looped throught, so i change the code into using a min price to keep track of the previos minium day, then subtract the current item and compare to max.

The Complexity time is O(n) since we only loop throught the array once.

## Clean Up Code

Not much to be done since the code is already simple and clear.