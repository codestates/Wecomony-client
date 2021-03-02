import React from 'react';
import { useState } from 'react';
import { NativeSelect } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Box, DateInput, Grommet } from 'grommet';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CreateAccountEvents from '../customhooks/useCreateAccountEvents';
import Calender from '../util/CreateAccount/calender';
import IncomeOther from '../util/CreateAccount/incomeOther';
import OutcomeOther from '../util/CreateAccount/outcomeOther';

interface counter {
  inCounter:any
  incomeCounter:any
}


const CreateAccount:React.FC<counter> = ({inCounter, incomeCounter}) => {
  
  interface props {
    category:any
    cost:any 
    desc:any 
}

  
 

const [value, setValue] = useState<string>(); 

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
//

const onChange = (e: any) => {
 setValue(e.value);
};

const incomeChange = () => {
  
}

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
  

  return (
    <div className="center-createAccount-container">
      <div className="center-createAccount-datePicker">
        <Calender value= {value} onChange= {onChange} />
      </div>

      <div className="center-createAccount-select">
        <div className="center-createAccount-income">
          <div className="income-title">수입</div>
          <IncomeOther incomeCounter={incomeCounter} inCounter={inCounter} category={income1.category} cost={income1.cost} desc={income1.desc} onChange={setIncome1} />
        </div>

        <div className="center-createAccount-outcome">
          <div className="outcome-title">지출</div>
          <div className="outcome-other">
            <OutcomeOther category={outcome1.category} cost={outcome1.cost} desc={outcome1.desc} onChange={setOutcome1} ></OutcomeOther>
        </div>
        </div>
      </div>

      <div className="center-createAccount-belowBtns">
        <div className="belowBtns-save">
          <button className="belowBtns-saveBtn">저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
