import React from 'react';
import { useState } from 'react';
import Calender from '../util/CreateAccount/calender';
import IncomeOther from '../util/CreateAccount/incomeOther';
import OutcomeOther from '../util/CreateAccount/outcomeOther';

interface counter {
  inCounter:any
  outCounter:any
  incomeCounter:number
  outcomeCounter:number
}


const CreateAccount:React.FC<counter> = ({inCounter, outCounter, incomeCounter, outcomeCounter}) => {
  
  interface props {
    category:any
    cost:any 
    desc:any 
}


const [income1, setIncome1] = useState<props>({
 category: 10,
 cost: null,
 desc: null
}); 
const [income2, setIncome2] = useState<props>({
 category: 10,
 cost: null,
 desc: null
});
const [outcome1, setOutcome1] = useState<props>({
 category: 10,
 cost: null,
 desc: null
});
const [outcome2, setOutcome2] = useState<props>({
 category: 10,
 cost: null,
 desc: null
});

const [selectedDate, setSelectedDate] = React.useState<Date | null>(
  new Date()
);

const handleDateChange = (date: Date | null) => {
  setSelectedDate(date);
};


const changeIncome1 = (e: any) => {
  const copy = Object.assign(income1)
  copy[e.target.name] = e.target.value
  setIncome1({
      ...copy
  })
 };


const changeIncome2 = (e: any) => {
  const copy = Object.assign(income2)
  copy[e.target.name] = e.target.value
  setIncome2({
      ...copy
  })
 };

const changeOutcome1 = (e: any) => {
   const copy = Object.assign(outcome1)
   copy[e.target.name] = e.target.value
   setOutcome1({
       ...copy
   })
};

const changeOutcome2 = (e: any) => {
 const copy = Object.assign(outcome2)
 copy[e.target.name] = e.target.value
 setOutcome2({
     ...copy
 })
};

const validCheck = () => {
    if (incomeCounter === 1) {
      if (!income1.category || !income1.cost || !income1.desc) {
        console.log("income1 중에서 작성하지 않은 부분이 있습니다.")
      } 
    } else if (incomeCounter > 1) {
      if (!income2.category || !income2.cost || !income2.desc) {
        console.log("income2 중에서 작성하지 않은 부분이 있습니다.")
      }
    }

    if (outcomeCounter === 1) {
      if (!outcome1.category || !outcome1.cost || !outcome1.desc) {
        console.log("outcome1 중에서 작성하지 않은 부분이 있습니다.")
      } 
    } else if (outcomeCounter > 1) {
      if (!outcome2.category || !outcome2.cost || !outcome2.desc) {
        console.log("outcome2 중에서 작성하지 않은 부분이 있습니다.")
      }
    }
}
  

  return (
    <div className="center-createAccount-container">
      <div className="center-createAccount-datePicker">
        <Calender selectedDate={selectedDate} handleDateChange={handleDateChange}/>
      </div>

      <div className="center-createAccount-select">
        <div className="center-createAccount-income">
          <div className="income-title">수입</div>
          <IncomeOther incomeCounter={incomeCounter} inCounter={inCounter} category={income1.category} cost={income1.cost} desc={income1.desc} onChange={changeIncome1}
            category2={income2.category} cost2={income2.cost} desc2={income2.desc} onChange2={changeIncome2}
          />
        </div>

        <div className="center-createAccount-outcome">
          <div className="outcome-title">지출</div>
            <OutcomeOther outcomeCounter={outcomeCounter} outCounter={outCounter} category={outcome1.category} cost={outcome1.cost} desc={outcome1.desc} onChange={changeOutcome1} 
              category2={outcome2.category} cost2={outcome2.cost} desc2={outcome2.desc} onChange2={changeOutcome2}
            />
        </div>
      </div>

      <div className="center-createAccount-belowBtns">
        <div className="belowBtns-save">
          <button onClick={validCheck} className="belowBtns-saveBtn">저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
