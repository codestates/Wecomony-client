import { useState } from 'react';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { FaTrashAlt } from "react-icons/fa";

interface props {
  category:any
  cost:any
  desc:any
  onChange:any
}

const OutcomeOther:React.FC<props> = ({category, cost, desc, onChange}:props) => {

    const [outcomeCounter, setOutcomeCounter] = useState<number>(1);

    const outCounter = (message:string) => {
        if (message === "up" && outcomeCounter < 2) {
          setOutcomeCounter(outcomeCounter + 1)
        } else if (message === "down" && outcomeCounter > 1) {
          setOutcomeCounter(outcomeCounter - 1)
        }
      }

  return (
    <>
    <div className="income-other">
    <div className="income-category">
      <InputLabel id="demo-simple-select-helper-label">카테고리</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        name="category"
        value={category || ''}
        onChange={onChange}
        style={{ width: '150px', textAlign: 'center' }}
      >
        <MenuItem value={10}>월급</MenuItem>
        <MenuItem value={20}>잔돈</MenuItem>
        <MenuItem value={30}>비상금</MenuItem>
      </Select>
      <FormHelperText>수입 항목을 골라주세요</FormHelperText>
    </div>
    <div className="income-cost">
      <TextField
        id="outlined-textarea"
        name="cost"
        label="금액"
        placeholder="금액을 적어주세요"
        value={cost || ''}
        size="small"
        onChange={onChange}
        variant="outlined"
      />
    </div>
    <div className="income-description">
      <TextField
        id="outlined-textarea"
        name="desc"
        label="수입 내용"
        placeholder="수입 내용에 대한 설명"
        value={desc || ''}
        size="small"
        onChange={onChange}
        variant="outlined"
      />
    </div>
    <div className="income-addBtn">
      <IconButton
        onClick={() => {outCounter("up")}}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  </div>

  {outcomeCounter === 2 ? <div className="income-other">
<div className="income-category">
  
    <InputLabel id="demo-simple-select-helper-label">
      카테고리
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      name="category"
      value={category || ''}
      onChange={onChange}
      style={{width: '150px',textAlign:'center'}}
    >
      <MenuItem value={10}>월급</MenuItem>
      <MenuItem value={20}>잔돈</MenuItem>
      <MenuItem value={30}>비상금</MenuItem>
    </Select>
    <FormHelperText>수입 항목을 골라주세요</FormHelperText>

</div>
<div className="income-cost">
  <TextField
    id="outlined-textarea"
    label="금액"
    name="cost"
    placeholder="금액을 적어주세요"
    value={cost || ''}
    size="small"
    onChange={onChange}
    variant="outlined"
  />
</div>
<div className="income-description">
  <TextField
    id="outlined-textarea"
    label="수입 내용"
    placeholder="수입 내용에 대한 설명"
    name="desc"
    value={desc || ''}
    size="small"
    onChange={onChange}
    variant="outlined"
  />
</div>
<div className="income-addBtn">
  <FaTrashAlt onClick = {() => outCounter("down")}></FaTrashAlt>
</div>
</div> : null }
</>
  );
};

export default OutcomeOther;