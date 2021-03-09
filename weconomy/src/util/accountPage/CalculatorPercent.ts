
const CalculatorPercent = (total: number, current: number) => {

  if(current === total){
    return 100
  }else if(String((current / total)).slice(2,4).length === 1){
    return Number(String((current / total)).slice(2,4)) * 10
  }
   else {
    return  Number(String((current / total)).slice(2,4))
  }
  
}

export default CalculatorPercent