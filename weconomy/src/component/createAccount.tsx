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


const CreateAccount = () => {

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
      //setIncome1();


    const copy = Object.assign(income1)
      copy[e.target.name] = e.target.value
      setIncome1({
          ...copy
      })
    };
  
    const changeIncome2 = (e: any) => {
      setIncome2(e.value);
    };
  
    const changeOutcome1 = (e: any) => {
        const copy = Object.assign(outcome1)
        copy[e.target.name] = e.target.value
        setOutcome1({
            ...copy
        })
    };
  
    const changeOutcome2 = (e: any) => {
      setOutcome2(e.value);
    };

  return (
    <div className="center-createAccount-container">
      <div className="center-createAccount-datePicker">
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
      </div>

      <div className="center-createAccount-select">
        <div className="center-createAccount-income">
          <div className="income-title">수입</div>
          <div className="income-other">
            <div className="income-category">
              
                <InputLabel id="demo-simple-select-helper-label">
                  카테고리
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="category"
                  value={income1.category}
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
                value={income1.cost}
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
                value={income1.desc}
                size="small"
                onChange={changeIncome1}
                variant="outlined"
              />
            </div>
            <div className="income-addBtn">
              <IconButton color="primary" aria-label="add to shopping cart">
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
                  value={income2.category}
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
                placeholder="금액을 적어주세요"
                value={income2.cost}
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
                value={income2.desc}
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
        </div>

        <div className="center-createAccount-outcome">
          <div className="outcome-title">지출</div>
          <div className="outcome-other">
            <div className="outcome-category">
              
                <InputLabel id="demo-simple-select-helper-label">
                  카테고리
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="category"
                  value={outcome1.category}
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
                value={outcome1.cost}
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
                value={outcome1.desc}
                onChange={changeOutcome1}
                variant="outlined"
                size="small"
              />
            </div>
            <div className="outcome-addBtn">
              <IconButton color="primary" aria-label="add to shopping cart">
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
                  value={outcome2.category}
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
                value={outcome2.cost}
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
                value={outcome2.desc}
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
