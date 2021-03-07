import { Box, Chart, Text } from 'grommet';

const LabelledChart = ({ label, value }: { label: string; value: number }) => (
  <Box flex={false} basis="xsmall" align="center" gap="small">
    <Chart
      bounds={[
        [0, 2],
        [0, 500000], //총 지출 금액 적는곳
      ]}
      type="bar"
      values={[{ value: [1, value] }]}
      round
      animate={true}
      color="#1474F8"
      size={{ height: 'small', width: 'xsmall' }}
    />
    <Box align="center">
      <Text size="medium">{label}</Text>
      <Text size="medium" weight="bold">
        {value} 원
      </Text>
    </Box>
  </Box>
);

export default LabelledChart;
