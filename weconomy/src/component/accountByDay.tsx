import React, { useState, useEffect } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import AccountDetail from './accountDetail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { useParams } from 'react-router-dom';
import { changeDetailDate } from '../store/actions/pageAction';
import CalcullationDay from '../util/accountPage/CalculationDay';
import threeComma from '../util/threeComma';
import { seeDetailModalOpen } from '../store/actions/modalActions';

interface ParamsId {
  id: string;
}

interface datas {
  id: number;
  upDown: string;
  category: string;
  desc: string;
  cost: number;
}

const AccountByDay = () => {
  const params: ParamsId = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();
  const onChange = (event: any) => {
    setValue(event.value);
  };

  const toSeeDetailModal = () => {
    dispatch(seeDetailModalOpen());
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const groupNow = useSelector((state: RootState) =>
    state.userStatus.groups.filter((group: datas) => {
      return group.id === Number(params.id);
    }),
  );
  const dateNow = useSelector(
    (state: RootState) => state.pageStatus?.detailDate,
  );

  const filterContent = groupNow[0].Contents.filter(
    (content: any) =>
      content?.dateTime === new Date(dateNow).toLocaleDateString(),
  );

  const handleDateChange = (date: Date | null) => {
    console.log(date);
    setSelectedDate(date);
    dispatch(changeDetailDate(date));
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
        <button onClick={toSeeDetailModal} className="seeDetail">
          출력 및 저장
        </button>
      </div>
      <div className="center-details-Account">
        <AccountDetail></AccountDetail>
      </div>
      <div className="bottom-details-Account">
        <div className="totalIncome">
          <span className="TextTotalDetails">총 수입 : </span>
          <span className="NumberTotalDetails">{`${threeComma(
            CalcullationDay('income', filterContent),
          )} 원`}</span>
        </div>
        <div className="totalOutcome">
          <span className="TextTotalDetails">총 지출 : </span>
          <span className="NumberTotalDetails">{`${threeComma(
            CalcullationDay('outcome', filterContent),
          )} 원`}</span>
        </div>
        <div className="totalDetails">
          <span className="TextTotalDetails">Total : </span>
          <span className="NumberTotalDetails">{`${threeComma(
            CalcullationDay('total', filterContent),
          )} 원`}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountByDay;
