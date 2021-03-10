import React from 'react';
import { useState } from 'react';
import Calender from '../util/CreateAccount/calender';
import IncomeOther from '../util/CreateAccount/incomeOther';
import OutcomeOther from '../util/CreateAccount/outcomeOther';
import validCheck from '../util/CreateAccount/useValidCheck';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import {
  askNoneSaveModalClose,
  askNoneSaveModalOpen,
  createErrorModalOpen,
  createSuccessModalOpen,
} from '../store/actions/modalActions';
import hasCreateValue from '../util/CreateAccount/hasCreateValue';
import SelectMeets from '../util/CreateAccount/selectMeets';
import { createNewContent } from '../store/actions/contentAction';
import NonMember from '../util/CreateAccount/nonMember';
import { useHistory } from 'react-router-dom';

interface counter {
  inCounter: any;
  outCounter: any;
  incomeCounter: number;
  outcomeCounter: number;
}

const CreateAccount: React.FC<counter> = ({
  inCounter,
  outCounter,
  incomeCounter,
  outcomeCounter,
}) => {
  interface props {
    category: any;
    cost: any;
    desc: any;
    upDown: string;
    dateTime: string;
    meetId: any;
    userId: number | null;
  }

  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootState) => state.userStatus?.userData?.id,
  );

  const isLogin = useSelector((state: RootState) => state.userStatus.isLogin);

  const [income1, setIncome1] = useState<props>({
    category: '선택해주세요',
    cost: null,
    desc: null,
    upDown: 'income',
    dateTime: new Date().toLocaleDateString(),
    meetId: '',
    userId: null,
  });

  const [income2, setIncome2] = useState<props>({
    category: '선택해주세요',
    cost: null,
    desc: null,
    upDown: 'income',
    dateTime: new Date().toLocaleDateString(),
    meetId: '',
    userId: null,
  });

  const [outcome1, setOutcome1] = useState<props>({
    category: '선택해주세요',
    cost: null,
    desc: null,
    upDown: 'outcome',
    dateTime: new Date().toLocaleDateString(),
    meetId: '',
    userId: null,
  });

  const [outcome2, setOutcome2] = useState<props>({
    category: '선택해주세요',
    cost: null,
    desc: null,
    upDown: 'outcome',
    dateTime: new Date().toLocaleDateString(),
    meetId: '',
    userId: null,
  });

  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const [selectedMeet, setSelectedMeet] = React.useState<string>(
    '선택해주세요',
  );

  const handleMeetChange = (event: any) => {
    setSelectedMeet(event.target.value);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const changeIncome1 = (e: any) => {
    const copy = Object.assign(income1);
    copy[e.target.name] = e.target.value;
    setIncome1({
      ...copy,
    });
  };

  const changeIncome2 = (e: any) => {
    const copy = Object.assign(income2);
    copy[e.target.name] = e.target.value;
    setIncome2({
      ...copy,
    });
  };

  const changeOutcome1 = (e: any) => {
    const copy = Object.assign(outcome1);
    copy[e.target.name] = e.target.value;
    setOutcome1({
      ...copy,
    });
  };

  const changeOutcome2 = (e: any) => {
    const copy = Object.assign(outcome2);
    copy[e.target.name] = e.target.value;
    setOutcome2({
      ...copy,
    });
  };

  const save = () => {
    const valid = validCheck(
      income1,
      income2,
      outcome1,
      outcome2,
      incomeCounter,
      outcomeCounter,
      selectedMeet,
      selectedDate,
    );
    if (valid.error !== 'none') {
      dispatch(createErrorModalOpen(valid.error));
    } else if (valid.error === 'none') {
      dispatch(createSuccessModalOpen());
      const value = hasCreateValue(
        income1,
        income2,
        outcome1,
        outcome2,
        selectedDate,
        selectedMeet,
        userId,
      );
      dispatch(createNewContent(value));
      console.log(value);
      setIncome1({
        ...income1,
        category: '선택해주세요',
        cost: null,
        desc: null,
      });
      setIncome2({
        ...income2,
        category: '선택해주세요',
        cost: null,
        desc: null,
      });
      setOutcome1({
        ...outcome1,
        category: '선택해주세요',
        cost: null,
        desc: null,
      });
      setOutcome2({
        ...outcome2,
        category: '선택해주세요',
        cost: null,
        desc: null,
      });
    }
  };

  const history = useHistory();

  const save2 = () => {
    dispatch(askNoneSaveModalOpen());
  };

  return (
    <div className="center-createAccount-container">
      <div className="center-createAccount-datePicker">
        <div>
          {isLogin ? (
            <SelectMeets
              selectedMeet={selectedMeet}
              handleMeetChange={handleMeetChange}
            />
          ) : (
            <NonMember
              selectedMeet={selectedMeet}
              handleMeetChange={handleMeetChange}
            />
          )}
        </div>
        <div className="calender">
          <Calender
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </div>
      </div>

      <div className="center-createAccount-select">
        <div className="center-createAccount-income">
          <div className="income-title">수입</div>
          <IncomeOther
            incomeCounter={incomeCounter}
            inCounter={inCounter}
            category={income1.category}
            cost={income1.cost}
            desc={income1.desc}
            onChange={changeIncome1}
            category2={income2.category}
            cost2={income2.cost}
            desc2={income2.desc}
            onChange2={changeIncome2}
          />
        </div>

        <div className="center-createAccount-outcome">
          <div className="outcome-title">지출</div>
          <OutcomeOther
            outcomeCounter={outcomeCounter}
            outCounter={outCounter}
            category={outcome1.category}
            cost={outcome1.cost}
            desc={outcome1.desc}
            onChange={changeOutcome1}
            category2={outcome2.category}
            cost2={outcome2.cost}
            desc2={outcome2.desc}
            onChange2={changeOutcome2}
          />
        </div>
      </div>

      <div className="center-createAccount-belowBtns">
        <div className="belowBtns-save">
          {isLogin ? (
            <button onClick={save} className="belowBtns-saveBtn">
              작성
            </button>
          ) : (
            <button onClick={save2} className="belowBtns-saveBtn">
              작성
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
