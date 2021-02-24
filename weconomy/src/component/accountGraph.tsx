import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grommet, Box, Meter, Chart, Text, Stack } from 'grommet';
import { grommet } from 'grommet/themes';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const LabelledChart = ({ label, value }: { label: string; value: number }) => (
  <Box flex={false} basis="xsmall" align="center" gap="small">
    <Chart
      bounds={[
        [0, 2],
        [0, 500000], //총 지출 금액 적는곳
      ]}
      type="bar"
      values={[{ value: [1, value] }]}
      round
      animate={true}
      color="#1474F8"
      size={{ height: 'small', width: 'xsmall' }}
    />
    <Box align="center">
      <Text>{label}</Text>
      <Text weight="bold">{value} 원</Text>
    </Box>
  </Box>
);

const AccountGraph = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const meterValue = 50;

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
          centered
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
          <div>이번 달 잔고 1,000,000원</div>
          <div>총 지출 금액 500,000원</div>
          <div>총 남은 금액 500,000원</div>
        </div>
      </div>
      <div className="graphBottom">
        <Grommet theme={grommet}>
          <Box pad="large" direction="row" gap="medium">
            <LabelledChart label="식비" value={300000} />
            <LabelledChart label="공과금" value={100000} />
            <LabelledChart label="유흥비" value={70000} />
            <LabelledChart label="기타" value={30000} />
          </Box>
        </Grommet>
      </div>
    </div>
  );
};

export default AccountGraph;
