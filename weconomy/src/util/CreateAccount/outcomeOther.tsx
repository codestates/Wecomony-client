import { useState } from 'react';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { FaTrashAlt } from 'react-icons/fa';
import { FiPlusSquare } from 'react-icons/fi';
import { FiMinusSquare } from 'react-icons/fi';
interface props {
  outcomeCounter: number;
  outCounter: any;
  category: any;
  category2: any;
  cost: any;
  cost2: any;
  desc: any;
  desc2: any;
  onChange: any;
  onChange2: any;
}

const OutcomeOther: React.FC<props> = ({
  outcomeCounter,
  outCounter,
  category,
  category2,
  cost,
  cost2,
  desc,
  desc2,
  onChange,
  onChange2,
}: props) => {
  return (
    <>
      <div className="outcome-other">
        <div className="outcome-category">
          <InputLabel id="demo-simple-select-helper-label">카테고리</InputLabel>
          <Select
            className="selecCate"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="category"
            value={category || ''}
            onChange={onChange}
            style={{ textAlign: 'center' }}
          >
            <MenuItem value="선택해주세요">
              <div>선택해주세요</div>
            </MenuItem>
            <MenuItem value={'교통'}>교통</MenuItem>
            <MenuItem value={'통신'}>통신</MenuItem>
            <MenuItem value={'식비'}>식비</MenuItem>
            <MenuItem value={'세금'}>세금</MenuItem>
            <MenuItem value={'경조사'}>경조사</MenuItem>
            <MenuItem value={'여행'}>여행</MenuItem>
            <MenuItem value={'쇼핑'}>쇼핑</MenuItem>
            <MenuItem value={'취미'}>취미</MenuItem>
            <MenuItem value={'기타'}>기타</MenuItem>
          </Select>
          <FormHelperText></FormHelperText>
        </div>
        <div className="outcome-cost">
          <TextField
            id="outlined-textarea"
            name="cost"
            label="금액"
            inputProps={{ maxLength: 9 }}
            placeholder="금액을 적어주세요"
            value={cost || ''}
            size="small"
            onChange={onChange}
            variant="outlined"
          />
        </div>
        <div className="outcome-description">
          <TextField
            id="outlined-textarea"
            name="desc"
            label="수입 내용"
            placeholder="수입 내용에 대한 설명"
            inputProps={{ maxLength: 12 }}
            value={desc || ''}
            size="small"
            onChange={onChange}
            variant="outlined"
          />
        </div>
        <div className="outcome-addBtn">
          <IconButton
            onClick={() => {
              outCounter('up');
            }}
            color="primary"
            aria-label="add to shopping cart"
          >
            <FiPlusSquare />
          </IconButton>
        </div>
      </div>

      {outcomeCounter === 2 ? (
        <div className="outcome-other">
          <div className="outcome-category">
            <InputLabel id="demo-simple-select-helper-label">
              카테고리
            </InputLabel>
            <Select
              className="selecCate"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name="category"
              value={category2 || ''}
              onChange={onChange2}
              style={{ textAlign: 'center' }}
            >
              <MenuItem value="선택해주세요">
                <div>선택해주세요</div>
              </MenuItem>
              <MenuItem value={'교통'}>교통</MenuItem>
              <MenuItem value={'통신'}>통신</MenuItem>
              <MenuItem value={'식비'}>식비</MenuItem>
              <MenuItem value={'세금'}>세금</MenuItem>
              <MenuItem value={'경조사'}>경조사</MenuItem>
              <MenuItem value={'여행'}>여행</MenuItem>
              <MenuItem value={'쇼핑'}>쇼핑</MenuItem>
              <MenuItem value={'취미'}>취미</MenuItem>
              <MenuItem value={'기타'}>기타</MenuItem>
            </Select>
            <FormHelperText></FormHelperText>
          </div>
          <div className="outcome-cost">
            <TextField
              id="outlined-textarea"
              label="금액"
              name="cost"
              inputProps={{ maxLength: 9 }}
              placeholder="금액을 적어주세요"
              value={cost2 || ''}
              size="small"
              onChange={onChange2}
              variant="outlined"
            />
          </div>
          <div className="outcome-description">
            <TextField
              id="outlined-textarea"
              label="수입 내용"
              placeholder="수입 내용에 대한 설명"
              inputProps={{ maxLength: 12 }}
              name="desc"
              value={desc2 || ''}
              size="small"
              onChange={onChange2}
              variant="outlined"
            />
          </div>
          <div className="outcome-addBtn">
            <IconButton
              onClick={() => outCounter('down')}
              color="primary"
              aria-label="add to shopping cart"
            >
              <FiMinusSquare />
            </IconButton>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OutcomeOther;
