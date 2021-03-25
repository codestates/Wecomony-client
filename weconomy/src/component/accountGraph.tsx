import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import CalculationMonth from '../util/accountPage/CalculationMonth';
import threeComma from '../util/threeComma';
import CalculatorPercent from '../util/accountPage/CalculatorPercent';
import CalculationWeek from '../util/accountPage/CalculationWeek';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountUp from 'react-countup';
import FilterIncomes from '../util/accountPage/FilterIncomes';
import CalculationAll from '../util/accountPage/CalculationAll';
import FilterIncomesPercent from '../util/accountPage/FilterIncomesPercent';
import SpreadGraphData from '../util/accountPage/SpreadGraphData';

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
  const [value, setValue] = useState(0);

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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const filterIncome = FilterIncomes(filterContentMonth);

  const total = CalculationAll(filterIncome);

  const percent = FilterIncomesPercent(filterIncome, total);

  const graphBottomData = SpreadGraphData(filterIncome, percent);

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
        {graphBottomData.length === 0 ? (
          <div className="graphBottomError">
            <div>가계 데이터가 부족합니다</div>
          </div>
        ) : (
          graphBottomData
        )}
      </div>
    </div>
  );
};

export default AccountGraph;
