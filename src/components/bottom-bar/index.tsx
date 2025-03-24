import { Box, Slider, Typography } from '@mui/material';
import { FC } from 'react';
import styles from './styles';

const BottomBar: FC<{
  isFooterVisible: boolean;
  pageSlip: number;
  handlePageSlip: (value: number) => void;
}> = ({ isFooterVisible, pageSlip, handlePageSlip }) => (
  <Box
    component="section"
    sx={[styles.bottomBar, !isFooterVisible ? styles.hidden : {}]}
  >
    <Typography>Duration ({pageSlip} ms)</Typography>
    <Box sx={styles.textSpeedControllersBox}>
      <Slider
        min={100}
        max={1000}
        step={100}
        value={pageSlip}
        defaultValue={500}
        onChange={(_e, value) => handlePageSlip(value as number)}
      />
    </Box>
  </Box>
);

export default BottomBar;
