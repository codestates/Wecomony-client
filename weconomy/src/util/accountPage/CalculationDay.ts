interface datas {
  id: number;
  upDown: string;
  category: string;
  desc: string;
  cost: number;
}


const CalculationDay = (type : string, content: Array<datas>) => {
  let total = 0
  if(type === 'income'){
    for(let i = 0; i < content.length; i++) {
      if(content[i].upDown === 'income'){
        total += content[i].cost
      }
    }
  } else if(type === 'outcome'){
    for(let i = 0; i < content.length; i++) {
      if(content[i].upDown === 'outcome'){
        total += content[i].cost
      }
    }
  } else if(type === 'total'){
    for(let i = 0; i < content.length; i++) {
      if(content[i].upDown === 'income'){
        total += content[i].cost
      } else if(content[i].upDown === 'outcome'){
        total -= content[i].cost
      }
    }
  }

  return total
}

export default CalculationDay