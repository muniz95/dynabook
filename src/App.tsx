import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import BottomBar from './components/bottom-bar';
import TextContent from './components/text-content';
import { useTextReadout } from './hooks/use-text-readout'; // Import the hook

const App = () => {
  const [pageSlip, setPageSlip] = useState<number>(500);
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(true);
  const {
    text,
    currentWordPosition,
    isReading,
    setIsReading,
    startReadout,
    stopText,
    resumeText,
  } = useTextReadout(pageSlip); // Use the hook

  const handlePageSlip = (newValue: number) => {
    setPageSlip(newValue);
  };

  const showText = () => {
    setIsReading(true);
    startReadout(0);
  };

  useEffect(() => {
    setIsFooterVisible(!isReading);
  }, [isReading]);

  const currentWord = text[currentWordPosition];
  const buttonAction = isReading
    ? stopText
    : currentWordPosition > 0
      ? resumeText
      : showText;

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#12181f',
        color: 'white',
      }}
    >
      <TextContent
        currentWord={currentWord}
        buttonAction={buttonAction}
        isReading={isReading}
      />
      <BottomBar
        isFooterVisible={isFooterVisible}
        pageSlip={pageSlip}
        handlePageSlip={handlePageSlip}
      />
    </Container>
  );
};

export default App;
