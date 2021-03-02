import React, { useState, useEffect } from 'react';
import { Box, DateInput, Grommet } from 'grommet';
import { base } from 'grommet/themes';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import AccountDetail from './accountDetail';

const AccountByDay = () => {
  const [value, setValue] = useState<string>();
  const onChange = (event: any) => {
    setValue(event.value);
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div className="center-Account-container">
      <div className="datePicker-Account">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="center">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy/MM/dd"
              margin="normal"
              id="date-picker-inline"
              label="날짜를 선택해주세요"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <div className="center-details-Account">
        <AccountDetail></AccountDetail>
      </div>
      <div className="bottom-details-Account">
        <div className="totalDetails">
          <span className="TextTotalDetails">Total : </span>
          <span className="NumberTotalDetails"> 600000 원</span>
        </div>
      </div>
    </div>
  );
};

export default AccountByDay;
