import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

interface selects {
  selectedMeet: any;
  handleMeetChange: any;
}

const SelectMeets: React.FC<selects> = ({ selectedMeet, handleMeetChange }) => {

  const userNow = useSelector((state: RootState) => state.userStatus.groups);

  console.log(userNow);

  const loop = userNow.map((res:any) => {
    return (
        <MenuItem value={`${res.id}`}>{`${res.meetName}`}</MenuItem>
    )
  })
  
  return (
    <>
      <InputLabel id="demo-simple-select-helper-label">그룹 목록</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        name="meetList"
        value={selectedMeet || ''}
        onChange={handleMeetChange}
        style={{ width: '150px', textAlign: 'center' }}
      >
        <MenuItem value="">
          <em>선택해주세요</em>
        </MenuItem>
        {loop}
      </Select>
      <FormHelperText>그룹을 선택해주세요</FormHelperText>
    </>
  );
};

export default SelectMeets;
