import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grommet, Box, Meter, Chart, Text, Stack } from 'grommet';
import useMedia from '../customhooks/useMedia';
import { grommet } from 'grommet/themes';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LabelledChart from '../piececompo/LabelledChart';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };
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
          <Tab label="주간" />
        </Tabs>
      </Paper>
      <div className="graphTop">
        <Grommet theme={grommet}>
          <Box align="center" pad="large" background="none">
            <Stack anchor="center">
              <Meter
                type="circle"
                value={meterValue}
                size="small"
                thickness="small"
                color="#1474F8"
              />
              <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                <Text size="xlarge" weight="bold">
                  {meterValue}
                </Text>
                <Text size="small">%</Text>
              </Box>
            </Stack>
          </Box>
        </Grommet>
        <div className="totalGraph">
          <div>이번 달 가용 금액 {groupNow[0].totalcost}원</div>
          <div>총 지출 금액 500,000원</div>
          <div>총 남은 금액 500,000원</div>
        </div>
      </div>
      {isMobile ? (
        <div className="graphBottom">
          <Grommet theme={grommet}>
            <Box pad="large" direction="row" gap="large">
              <LabelledChart label="식비" value={300000} />
              <LabelledChart label="공과금" value={100000} />
              <LabelledChart label="유흥비" value={70000} />
            </Box>
          </Grommet>
        </div>
      ) : (
        <div className="graphBottom">
          <Grommet theme={grommet}>
            <Box pad="small" direction="row" gap="large" align="center">
              <LabelledChart label="식비" value={300000} />
              <LabelledChart label="공과금" value={100000} />
              <LabelledChart label="유흥비" value={70000} />
              <LabelledChart label="기타" value={30000} />
            </Box>
          </Grommet>
        </div>
      )}
    </div>
  );
};

export default AccountGraph;
