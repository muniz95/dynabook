import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import styles from './styles';
import { PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material';

const TextContent: FC<{
  currentWord: string;
  buttonAction: () => void;
  isReading: boolean;
}> = ({ currentWord, buttonAction, isReading }) => (
  <Box component="section" sx={styles.container}>
    <Typography fontSize={'8vh'}>{currentWord}</Typography>
    <Button onClick={buttonAction}>
      {isReading ? <PauseCircleOutline /> : <PlayCircleOutline />}
    </Button>
  </Box>
);

export default TextContent;
