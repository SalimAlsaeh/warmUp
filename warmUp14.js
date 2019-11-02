/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction 
//(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
	
	var profitsArray = [];
	while(prices.length !== 0) {
		var buyingPrice = prices[0];
		var maxProfit = 0;
		// this loop is to identify the minimum buying price;
		for (var i = 0; i < prices.length; i++) {
			if (buyingPrice > prices[i]) {
				buyingPrice = prices[i];
			}
			
		}
		// this loop is to identify the maximum selling price starting from the index after the minimum buying price;
		var sellingPrice = prices[prices.indexOf(buyingPrice) + 1];
		
		for (var i = prices.indexOf(buyingPrice) + 1; i < prices.length; i++) {
			if (sellingPrice < prices[i]) {
				sellingPrice = prices[i];
			}
		}
		// if the either the selling price or the buying price is undefined meaning that theere is no selling price or the array is not numbers,
		// return 0

		if (sellingPrice === undefined || buyingPrice === undefined) {
		   break; // returns 0
		}
		// calcaulates the max profit

		maxProfit = sellingPrice - buyingPrice;

		// if the maxProfit is negative that means you are actually losing not profiting if you bought the stock, if not; returns it;
		if (maxProfit <= 0) {
			maxProfit = 0;
		}
		profitsArray.push(maxProfit);
		prices.splice(prices.indexOf(buyingPrice), 1);
	}

	return profitsArray.reduce(function(a, b) {
   	 	return Math.max(a, b);
	});
};
