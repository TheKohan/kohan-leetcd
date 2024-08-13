function spiralOrder(matrix: number[][]): number[] {
  let result: number[] = []

    while(true){
      let newMatrix: number[][] = []

      let topPortion: number[] = []
      let bottomPortion: number[] = []
      let leftPortion: number[] = []
      let rightPortion: number[] = []
      for (let i = 0; i <= matrix.length - 1; i++){
        if(matrix.length === 1){
          result = [...result, ...matrix[0]]
          return result
        }
        if(i === 0){
          topPortion = [...matrix[i]]
        } else if(i === matrix.length -1 ){
          bottomPortion = matrix[i]
          result = [...result, ...topPortion, ...rightPortion, ...[...bottomPortion].reverse(), ...[...leftPortion].reverse()]
          if(newMatrix.length){
            matrix = [...newMatrix]
            topPortion = []
            bottomPortion = []
            leftPortion = []
            rightPortion = []
          }else{
            return result
          }
        }else{
          if(matrix[i].length >= 2){
            const firstItem = matrix[i][0]
            const lastItem = matrix[i][matrix[i].length -1]
            const middleItems = matrix[i].slice(1,matrix[i].length -1 )
            if(middleItems.length !== 0){
              newMatrix.push([...middleItems])
            }
            rightPortion.push(lastItem)
            leftPortion.push(firstItem)
          }else{
            const firstItem = matrix[i][0]
            rightPortion.push(firstItem)
          }    
        }
     }
  }
};

