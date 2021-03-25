const calculateAll = (filterIncome:any) => {
    let cost = 0;
    for (let i = 0; i < filterIncome.length; i++) {
      cost += filterIncome[i][1];
    }
    return cost;
  };

  export default calculateAll;