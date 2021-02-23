import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grommet, Box, Meter } from 'grommet';
import { grommet } from 'grommet/themes';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const AccountGraph = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const base = 30;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div>
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
          <Box align="center" pad="large" background="#EFEFEF">
            <Meter
              type="circle"
              value={base}
              size="small"
              thickness="small"
              background="white"
            />
          </Box>
        </Grommet>
        <div className="totalGraph">
          <h2>이번 달 잔고 500,000원</h2>
          <h2>총 지출 금액 500,000원</h2>
          <h2>총 남은 금액 500,000원</h2>
        </div>
      </div>
    </div>
  );
};

export default AccountGraph;
