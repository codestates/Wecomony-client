const getPercent = (filterIncome:any, total:any) => {
    let arr: any = [];
    for (let i = 0; i < filterIncome.length; i++) {
      arr.push(Math.round((filterIncome[i][1] / total) * 100));
    }
    return arr;
  };

  export default getPercent;
