import threeComma from '../threeComma'

interface datas {
  id: number;
  upDown: string;
  category: string;
  desc: string;
  cost: number;
}

const CalculationMonth = (content: Array<datas>) => {
  let total = 0
  for(let i = 0; i < content.length; i++){
    if(content[i].upDown === 'outcome'){
      total += content[i].cost
    }
  }
  return total
}

export default CalculationMonth