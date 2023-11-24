import React from 'react';
import './App.css';

const App = () => {
  const [pageSlip, setPageSlip] = React.useState<number>(500);
  const [isFooterVisible, setIsFooterVisible] = React.useState<boolean>(true);
  const [text, setText] = React.useState<string[]>([]);
  const [currentWordPosition, setCurrentWordPosition] = React.useState(0);
  const [isReading, setIsReading] = React.useState(false);
  const currentTimer = React.useRef<NodeJS.Timeout>();

  const startReadout = (startPosition: number) => {
    currentTimer.current = setInterval(function () {
      if (startPosition < text.length - 1) {
        setCurrentWordPosition(state => state + 1);
      } else {
        setCurrentWordPosition(0);
        stopText();
      }
      startPosition++;
    }, pageSlip)
  }

  const handlePageSlip = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPageSlip(target.valueAsNumber);
  }

  const showText = () => {
    setIsReading(true);
    startReadout(0);
  };

  const stopText = () => {
    setIsReading(false);
    clearInterval(currentTimer.current);
  };

  const resumeText = () => {
    setIsReading(true);
    startReadout(currentWordPosition);
  };

  React.useEffect(() => {
    const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    setText(sampleText.split(' '));
  }, []);
  React.useEffect(() => {
    setIsFooterVisible(!isReading);
  }, [isReading]);

  const currentWord = text[currentWordPosition]
  const buttonAction = isReading
    ? stopText
    : currentWordPosition > 0
      ? resumeText
      : showText;

  return (
    <div className="app">
      <div className="container">
        <span onClick={() => buttonAction()} className="current-word">{currentWord}</span>
      </div>
      <footer hidden={!isFooterVisible}>
        <input type="number" name="pageSlip" id="pageSlip" defaultValue={pageSlip}
          onChange={handlePageSlip} />
      </footer>
    </div>
  )
};


export default App;
