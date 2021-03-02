import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const IncomeOther = () => {

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

export default IncomeOther;

/*
      <Grommet theme={base}>
        <Box align="center" justify="start" pad="small">
          <Box background="#" width="medium" gap="medium">
            <DateInput
              format="yyyy/mm/dd"
              value={value}
              onChange={onChange}
            />
          </Box>
        </Box>
      </Grommet>

<div className="income-other">
<div className="income-category">
  
    <InputLabel id="demo-simple-select-helper-label">
      카테고리
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      name="category"
      value={income1.category || ''}
      onChange={changeIncome1}
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
    name="cost"
    label="금액"
    placeholder="금액을 적어주세요"
    value={income1.cost || ''}
    size="small"
    onChange={changeIncome1}
    variant="outlined"
  />
</div>
<div className="income-description">
  <TextField
    id="outlined-textarea"
    name="desc"
    label="수입 내용"
    placeholder="수입 내용에 대한 설명"
    value={income1.desc || ''}
    size="small"
    onChange={changeIncome1}
    variant="outlined"
  />
</div>
<div className="income-addBtn">
  <IconButton onClick={addIncomeAcc} color="primary" aria-label="add to shopping cart">
    <AddShoppingCartIcon />
  </IconButton>
</div>
</div>

<div className="income-other">
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
<div className="income-cost">
  <TextField
    id="outlined-textarea"
    label="금액"
    name="cost"
    placeholder="금액을 적어주세요"
    value={income2.cost || ''}
    size="small"
    onChange={changeIncome2}
    variant="outlined"
  />
</div>
<div className="income-description">
  <TextField
    id="outlined-textarea"
    label="수입 내용"
    placeholder="수입 내용에 대한 설명"
    name="desc"
    value={income2.desc || ''}
    size="small"
    onChange={changeIncome2}
    variant="outlined"
  />
</div>
<div className="income-addBtn">
  <IconButton aria-label="delete" disabled color="primary">
    <DeleteIcon />
  </IconButton>
</div>
</div>



<div className="outcome-other">
<div className="outcome-category">
  
    <InputLabel id="demo-simple-select-helper-label">
      카테고리
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      name="category"
      value={outcome1.category || ''}
      onChange={changeOutcome1}
      style={{width: '150px',textAlign:'center'}}
    >
      <MenuItem value={10}>식비</MenuItem>
      <MenuItem value={20}>교통비</MenuItem>
      <MenuItem value={30}>패션</MenuItem>
    </Select>
    <FormHelperText>지출 항목을 골라주세요</FormHelperText>

</div>
<div className="outcome-cost">
  <TextField
    id="outlined-textarea"
    label="금액"
    placeholder="지출 금액"
    name="cost"
    value={outcome1.cost || ''}
    onChange={changeOutcome1}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-description">
  <TextField
    id="outlined-textarea"
    name="desc"
    label="지출 내용"
    placeholder="지출 내용에 대한 설명"
    value={outcome1.desc || ''}
    onChange={changeOutcome1}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-addBtn">
  <IconButton onClick={addOutcomeAcc} color="primary" aria-label="add to shopping cart">
    <AddShoppingCartIcon />
  </IconButton>
</div>
</div>
<div className="outcome-other">
<div className="outcome-category">
  
    <InputLabel id="demo-simple-select-helper-label">
      카테고리
    </InputLabel>
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      name="category"
      value={outcome2.category || ''}
      onChange={changeOutcome2}
      style={{width: '150px',textAlign:'center'}}
    >
      <MenuItem value={10}>식비</MenuItem>
      <MenuItem value={20}>교통비</MenuItem>
      <MenuItem value={30}>패션</MenuItem>
    </Select>
    <FormHelperText>지출 항목을 골라주세요</FormHelperText>

</div>
<div className="outcome-cost">
  <TextField
    id="outlined-textarea"
    label="금액"
    placeholder="지출 금액"
    name="cost"
    value={outcome2.cost || ''}
    onChange={changeOutcome2}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-description">
  <TextField
    id="outlined-textarea"
    label="지출 내용"
    placeholder="지출 내용에 대한 설명"
    name="desc"
    value={outcome2.desc || ''}
    onChange={changeOutcome2}
    variant="outlined"
    size="small"
  />
</div>
<div className="outcome-addBtn">
  <IconButton aria-label="delete" disabled color="primary">
    <DeleteIcon />
  </IconButton>
</div>
</div>
*/