import React from 'react';
import { useState } from 'react';
import { NativeSelect } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Box, DateInput, Grommet } from 'grommet';
import { base } from 'grommet/themes';
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

  

const createAccountEvents = () => {

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

const onChange = (e: any) => {
 setValue(e.value);
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

const addIncomeAcc = () => {
  
}

const addOutcomeAcc = () => {

}

const deleteAcc = () => {

}

}

export default createAccountEvents
