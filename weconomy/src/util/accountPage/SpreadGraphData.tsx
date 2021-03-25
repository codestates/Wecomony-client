const spreadGraphData = (filterIncome:any, percent:any) => {
    let colorArr = ['#c44569', '#f3a683', '#f5cd79', '#9c88ff'];

    let arr2: any = [];

    for (let i = 0; i < filterIncome.length; i++) {
      if (arr2.length > 3) {
        break;
      }
      arr2.push([
        <>
          <div className="graphBottomName">{filterIncome[i][0]}</div>
          <div className="graphBottomBar">
            <span
              style={{ width: `${percent[i]}%`, background: `${colorArr[i]}` }}
            ></span>
          </div>
        </>,
      ]);
    }
    return arr2;
  };

  export default spreadGraphData;