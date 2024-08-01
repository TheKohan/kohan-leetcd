function maxProfit(prices: number[]): number {
  let profit = 0
  let lowBall = prices[0]
  
  for(let i = 0; i <= prices.length-1; i++){
    const currPrice = prices[i]
    if(currPrice >= lowBall){
      const newProfit = currPrice - lowBall
      if(newProfit > profit) profit = newProfit
    }else{
      lowBall = currPrice
    }
  }
  return profit
}

maxProfit([7,1,5,3,6,4])