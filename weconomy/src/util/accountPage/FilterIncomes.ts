interface datas {
    id: number;
    upDown: string;
    category: string;
    desc: string;
    cost: number;
  }

const filterIncomes = (filterContentMonth: Array<datas>) => {
    const reFilter = filterContentMonth.filter(
      (content: any) => content.upDown === 'outcome',
    );

    let obj: any = {};
    let arr: Array<object | string> = [];

    for (let i = 0; i < reFilter.length; i++) {
      if (!obj[reFilter[i].category]) {
        obj[reFilter[i].category] = 0;
      }
      obj[reFilter[i].category] += reFilter[i].cost;
    }
    for (let key in obj) {
      arr.push([key, obj[key]]);
    }
    arr.sort((a: any, b: any) => {
      return b[1] - a[1];
    });
    return arr;
  };

  export default filterIncomes;