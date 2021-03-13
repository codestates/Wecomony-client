import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grommet, Box, Meter, Chart, Text, Stack } from 'grommet';
import useMedia from '../customhooks/useMedia';
import { grommet } from 'grommet/themes';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import CalculationMonth from '../util/accountPage/CalculationMonth';
import threeComma from '../util/threeComma';
import CalculatorPercent from '../util/accountPage/CalculatorPercent';
import CalculationWeek from '../util/accountPage/CalculationWeek';
import styled, { keyframes } from 'styled-components';
import { IoThunderstorm } from 'react-icons/io5';
import { formatISO9075 } from 'date-fns/esm';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    borderRadius: 0,
  },
});
interface ParamsId {
  id: string;
}

const AccountGraph = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const params: ParamsId = useParams();
  const { isMobile } = useMedia();
  const [value, setValue] = useState(0);
  const meterValue = 50;

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
  /*
  useEffect(() => {
    console.log(CalculationWeek(groupNow[0].Contents));
  }, []);
*/
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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

  return (
    <div className="left-Account-Container">
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="월간" />
          <Tab label="최근 일주일" />
        </Tabs>
      </Paper>
      <div className="graphTop">
        <CircularProgressbar
          value={CalculatorPercent(
            groupNow[0].totalcost,
            groupNow[0].totalcost - CalculationMonth(filterContentMonth),
          )}
          strokeWidth={7}
          text={`${CalculatorPercent(
            groupNow[0].totalcost,
            groupNow[0].totalcost - CalculationMonth(filterContentMonth),
          )}%`}
          className="circular"
        />
        <div className="totalGraph">
          <div className="totalMonthTopGraph">
            <div>이번 달 가용 금액 : </div>
            <div>
              <CountUp
                separator=","
                duration={1.4}
                end={groupNow[0].totalcost}
              />{' '}
              원
            </div>
          </div>
          <div>
            {value === 0 ? (
              <div className="totalMonthTopGraph">
                <div>이번 달 지출 금액 : </div>
                <div>
                  <CountUp
                    separator=","
                    duration={1.4}
                    end={CalculationMonth(filterContentMonth)}
                  />{' '}
                  원
                </div>
              </div>
            ) : (
              <div className="totalMonthTopGraph">
                <div>최근 일주일 지출 금액 : </div>
                <div>
                  <CountUp
                    separator=","
                    duration={1.7}
                    end={Number(CalculationWeek(groupNow[0].Contents))}
                  />{' '}
                  원
                </div>
              </div>
            )}
          </div>
          <div>
            {value === 0 ? (
              <div className="totalMonthTopGraph">
                <div>총 남은 금액 : </div>
                <div>
                  <CountUp
                    separator=","
                    duration={1.7}
                    end={
                      groupNow[0].totalcost -
                      CalculationMonth(filterContentMonth)
                    }
                  />{' '}
                  원
                </div>
              </div>
            ) : (
              <div className="totalMonthTopGraph">
                <div>총 남은 금액 : </div>
                <div>
                  {threeComma(
                    groupNow[0].totalcost -
                      CalculationMonth(CalculationWeek(groupNow[0].Contents)),
                  )}{' '}
                  원
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="graphBottom">
        {arr2.length === 0 ? (
          <div className="graphBottomError">
            <div>가계 데이터가 부족합니다</div>
          </div>
        ) : (
          arr2
        )}
      </div>
    </div>
  );
};

export default AccountGraph;
