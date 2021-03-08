
const CalculatorPercent = (total: number, current: number) => {

  return Number(String((current / total)).slice(2,4))
}

export default CalculatorPercent