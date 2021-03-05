import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import getUserMeets from '../../graphQuery/getUserMeets';

interface selects {
    selectedMeet: any;
    handleMeetChange:any;
}


const SelectMeets:React.FC<selects> = ({selectedMeet, handleMeetChange}) => {

  const userNow = useSelector((state:RootState) => state.userStatus.userData);

  console.log(userNow);

  const meetsQuery = getUserMeets(userNow!.id)

  console.log(meetsQuery);



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
          <MenuItem value={10}>그룹1</MenuItem>
          <MenuItem value={20}>그룹2</MenuItem>
          <MenuItem value={30}>그룹3</MenuItem>
        </Select>
        <FormHelperText>그룹을 선택해주세요</FormHelperText>
        </>
    )
}

export default SelectMeets;