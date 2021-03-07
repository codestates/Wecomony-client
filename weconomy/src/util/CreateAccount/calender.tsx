import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';

interface props {
  selectedDate:any
  handleDateChange:any
}

const Calender: React.FC<props> = ({selectedDate, handleDateChange}) => {


    return (
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
        />
      </Grid>
    </MuiPickersUtilsProvider>
    )
}

export default Calender;