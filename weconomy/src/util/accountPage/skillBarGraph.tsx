import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ParamsId {
    id: string;
  }

  const SkillBarGraph = () => {
    const params: ParamsId = useParams();

    const groupNow = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: any) => {
      return group.id === Number(params.id);
    }),
    );
    
    const filterContentMonth = groupNow[0].Contents.filter(
    (content: any) =>
      content?.dateTime.slice(5, 7) ===
      new Date().toLocaleDateString().slice(5, 7),
    );
    
    const filterIncomes = () => {
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
    
    const filterIncome: any = filterIncomes();
    
    const calculateAll = () => {
    let cost = 0;
    for (let i = 0; i < filterIncome.length; i++) {
      cost += filterIncome[i][1];
    }
    return cost;
    };
    
    const total = calculateAll();
    
    const getPercent = () => {
    let arr: any = [];
    for (let i = 0; i < filterIncome.length; i++) {
      arr.push(Math.round((filterIncome[i][1] / total) * 100));
    }
    return arr;
    };
    
    const percent = getPercent();
    
    useEffect(() => {
    console.log(arr2);
    }, []);
    
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
  }


export default SkillBarGraph