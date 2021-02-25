import React, { useState, useEffect } from 'react';
import { Box, DateInput, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import AccountDetail from './accountDetail';

const AccountByDay = () => {
  const [value, setValue] = useState<string>();
  const onChange = (event: any) => {
    setValue(event.value);
  };

  return (
    <div className="center-Account-container">
      <div className="datePicker-Account">
        <Grommet theme={grommet}>
          <Box align="center" justify="start" pad="medium">
            <Box width="medium" gap="medium" focusIndicator={true}>
              <DateInput
                format="yyyy/mm/dd"
                value={value}
                onChange={onChange}
              />
            </Box>
          </Box>
        </Grommet>
      </div>
      <div className="center-details-Account">
        <AccountDetail></AccountDetail>
      </div>
      <div className="bottom-details-Account">
        <div className="totalDetails">
          <span className="TextTotalDetails">Total : </span>
          <span className="NumberTotalDetails"> 600000 원</span>
        </div>
      </div>
    </div>
  );
};

export default AccountByDay;
