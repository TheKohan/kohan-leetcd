function maxProfit(prices: number[]): number {
  let profit = 0
  let potentialSubProfit = 0
  let buyPrice = Infinity

  for(let i = 0; i <= prices.length -1; i++){
    const currentPrice = prices[i]
    if(buyPrice < currentPrice || potentialSubProfit !== 0){
      const newSubprofit = currentPrice - buyPrice
      if(newSubprofit > potentialSubProfit){
        potentialSubProfit = newSubprofit
        if(prices[i +1] === undefined){
          profit += potentialSubProfit
        }
      }else{ 
        profit += potentialSubProfit
        console.log(profit)
        buyPrice = currentPrice
        potentialSubProfit = 0
      }
    }
    buyPrice = Math.min(buyPrice, currentPrice)
  }

  return profit;
 };
 