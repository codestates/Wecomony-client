import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const IncomeCategory = () => {

  interface props {
    category:any
    cost:any 
    desc:any 
}


 const [income2, setIncome2] = useState<props>({
  category: 10,
  cost: null,
  desc: null
 });

 const changeIncome2 = (e: any) => {
  const copy = Object.assign(income2)
  copy[e.target.name] = e.target.value
  setIncome2({
      ...copy
  })
 };

    return (
        <div className="income-category">
              
        <InputLabel id="demo-simple-select-helper-label">
          카테고리
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="category"
          value={income2.category || ''}
          onChange={changeIncome2}
          style={{width: '150px',textAlign:'center'}}
        >
          <MenuItem value={10}>월급</MenuItem>
          <MenuItem value={20}>잔돈</MenuItem>
          <MenuItem value={30}>비상금</MenuItem>
        </Select>
        <FormHelperText>수입 항목을 골라주세요</FormHelperText>
    </div>
    )
}

export default IncomeCategory;