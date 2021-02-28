import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
  

const createAccountEvents = () => {
  const [value, setValue] = useState<string>(); 
  const [income1, setIncome1] = useState<object>({
    category: null,
    cost: null,
    desc: null
}); 
  const [income2, setIncome2] = useState<object>({
    category: null,
    cost: null,
    desc: null
  });
  const [outcome1, setOutcome1] = useState<object>({
    category: null,
    cost: null,
    desc: null
  });
  const [outcome2, setOutcome2] = useState<object>({
    category: null,
    cost: null,
    desc: null
  });

  const onChange = (e: any) => {
    setValue(e.value);
  };

  const changeIncome1 = (e: any) => {
    setIncome1(e.value);
  };

  const changeIncome2 = (e: any) => {
    setIncome2(e.value);
  };

  const changeOutcome1 = (e: any) => {
    setOutcome1(e.value);
  };

  const changeOutcome2 = (e: any) => {
    setOutcome2(e.value);
  };

}

export default createAccountEvents
