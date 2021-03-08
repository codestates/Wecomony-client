
interface datas {
  id: number;
  upDown: string;
  category: string;
  desc: string;
  cost: number;
  dateTime : string
}

const CalculationWeek = (content : Array<datas>) => {
  let arr = []
  let returnArr = []
  for(let i = 0; i < 7; i++ ){
    let d = new Date();
    let dayOfMonth = d.getDate();
    d.setDate(dayOfMonth - i);
    arr.push(d.toLocaleDateString())
  }
    for(let i = 0; i < content.length; i++){
      console.log(content[i], arr)
      if(arr.includes(content[i].dateTime)){
        returnArr.push(content[i])
      }
    }
  return returnArr
}

export default CalculationWeek;