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

  const increasePageSlip = () => setPageSlip(state => state + 1);
  const decreasePageSlip = () => setPageSlip(state => state - 1);

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
        <span onClick={() => buttonAction()} className="current-word">
          {currentWord}
        </span>
      </div>
      <footer>
        <div className={`text-speed-control ${isFooterVisible ? 'visible' : 'hidden'}`}>
          <label htmlFor="pageSlip">Duration ({pageSlip} ms)</label>
          <div className='text-speed-controllers-box'>
            <button disabled={!isFooterVisible} onClick={decreasePageSlip}>-</button>
            <input type="range" min="100" max="1000" name="pageSlip" id="pageSlip"
              defaultValue={pageSlip} disabled={!isFooterVisible} onChange={handlePageSlip} />
            <button disabled={!isFooterVisible} onClick={increasePageSlip}>+</button>
          </div>
        </div>
      </footer>
    </div>
  )
};


export default App;
