import { Box, DateInput, Grommet } from 'grommet';
import { base } from 'grommet/themes';
import React from 'react';

interface props {
    value:any
    onChange:any
}

const Calender: React.FC<props> = ({value, onChange}:props) => {
    return (
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
    )
}

export default Calender;