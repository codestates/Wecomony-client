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

  const test = () => {
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

  const asdf:any = test();

  console.log(asdf);

  const calculate = () => {
    let cost = 0;
    for (let i = 0; i < asdf.length; i++) {
      cost += asdf[i][1]
    }
    return cost;
  }

  const total = calculate()

  const getPercent = () => {
    let arr:any = [];
    for (let i = 0; i < asdf.length; i++) {
      arr.push(Math.round(asdf[i][1] / total * 100))
    }
    return arr;
  }

  const percent = getPercent();

  console.log(percent);



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
        <Grommet theme={grommet}>
          <Box align="center" pad="large" background="none">
            <Stack anchor="center">
              <Meter
                type="circle"
                value={CalculatorPercent(
                  groupNow[0].totalcost,
                  groupNow[0].totalcost - CalculationMonth(filterContentMonth),
                )}
                size="small"
                thickness="small"
                color="#1474F8"
              />
              <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                <Text size="xlarge" weight="bold">
                  {CalculatorPercent(
                    groupNow[0].totalcost,
                    groupNow[0].totalcost -
                      CalculationMonth(filterContentMonth),
                  )}
                </Text>
                <Text size="small">%</Text>
              </Box>
            </Stack>
          </Box>
        </Grommet>
        <div className="totalGraph">
          <div>이번 달 가용 금액 : {threeComma(groupNow[0].totalcost)} 원</div>
          <div>
            {value === 0
              ? `이번 달 지출 금액 : ${threeComma(
                  CalculationMonth(filterContentMonth),
                )} 원`
              : `최근 일주일 지출 금액 : ${threeComma(
                  CalculationMonth(CalculationWeek(groupNow[0].Contents)),
                )} 원`}
          </div>
          <div>
            {value === 0
              ? `총 남은 금액 : ${threeComma(
                  groupNow[0].totalcost - CalculationMonth(filterContentMonth),
                )} 원`
              : `총 남은 금액 : ${threeComma(
                  groupNow[0].totalcost -
                    CalculationMonth(CalculationWeek(groupNow[0].Contents)),
                )} 원`}
          </div>
        </div>
      </div>
      {isMobile ? (
        <GraphBottom>
          <GraphBottomContainer>
            <GraphBottomFirst>월급</GraphBottomFirst>
          </GraphBottomContainer>
          <GraphBottomContainer>
            <GraphBottomSecond>식비</GraphBottomSecond>
          </GraphBottomContainer>
          <GraphBottomContainer>
            <GraphBottomThird>미용</GraphBottomThird>
          </GraphBottomContainer>
          <GraphBottomContainer>
            <GraphBottomFourth>비상금</GraphBottomFourth>
          </GraphBottomContainer>
        </GraphBottom>
      ) : (
        <GraphBottom>
          <GraphBottomContainer>
            <GraphBottomFirst>월급</GraphBottomFirst>
          </GraphBottomContainer>
          <GraphBottomContainer>
            <GraphBottomSecond>식비</GraphBottomSecond>
          </GraphBottomContainer>
          <GraphBottomContainer>
            <GraphBottomThird>미용</GraphBottomThird>
          </GraphBottomContainer>
          <GraphBottomContainer>
            <GraphBottomFourth>비상금</GraphBottomFourth>
          </GraphBottomContainer>
        </GraphBottom>
      )}
    </div>
  );
};

const GraphBottom = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  background-color: white;
  border-top: 2px solid gray;
  padding: 10px;
  height: 40%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const GraphBottomContainer = styled.div`
  position: relative;
  list-style: none;
  margin: 6% 0;
  font-weight: 500;
  text-transform: uppercase;
  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    height: 15px;
    background-color: #dfe6e9;
    border-radius: 1000px;
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 0;
    height: 15px;
    border-radius: 1000px;
    animation-duration: 1.2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
`;

const firstWidth = keyframes`
to {
  width: 92%;
}
`;

const secondWidth = keyframes`
to {
  width: 8%;
}
`;

const thirdWidth = keyframes`
to {
  width: 70%;
}
`;

const fourthWidth = keyframes`
to {
  width: 40%;
}
`;

const GraphBottomFirst = styled(GraphBottomContainer)`
  &:after {
    animation-name: ${firstWidth};
    background-color: #778beb;
  }
`;

const GraphBottomSecond = styled(GraphBottomContainer)`
  &:after {
    animation-name: ${secondWidth};
    background-color: #e17055;
  }
`;

const GraphBottomThird = styled(GraphBottomContainer)`
  &:after {
    animation-name: ${thirdWidth};
    background-color: #fdcb6e;
  }
`;

const GraphBottomFourth = styled(GraphBottomContainer)`
  &:after {
    animation-name: ${fourthWidth};
    background-color: #74b9ff;
  }
`;

export default AccountGraph;
