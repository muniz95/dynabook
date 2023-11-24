import React from 'react';
import './App.css';

const App = () => {
  const [pageSlip, setPageSlip] = React.useState<number>(500);
  const [text, setText] = React.useState<string[]>([]);
  const [currentWordPosition, setCurrentWordPosition] = React.useState(0);
  const [isReading, setIsReading] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout | null>(null);

  const startReadout = (startPosition: number) => {
    const thread = setInterval(function () {
      if (startPosition < text.length - 1) {
        setCurrentWordPosition(state => state + 1);
      } else {
        setCurrentWordPosition(0);
        stopText();
      }
      startPosition++;
    }, pageSlip)
    setIntervalId(thread);
  }

  const showText = () => {
    console.log('iniciando leitura');

    setIsReading(true);
    startReadout(0);
  };

  const stopText = () => {
    console.log('leitura pausada');

    setIsReading(false);
    clearInterval(intervalId!)
  };

  const resumeText = () => {
    console.log('continuando leitura');

    setIsReading(true);
    startReadout(currentWordPosition);
  };

  React.useEffect(() => {
    const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    setText(sampleText.split(' '));
  }, []);

  const currentWord = text[currentWordPosition]
  const buttonAction = isReading
    ? stopText
    : currentWordPosition > 0
      ? resumeText
      : showText;

  return (
    <div className="app">
      <div className="container">
        <div>
          <span onClick={() => buttonAction()} className="current-word">{currentWord}</span>
        </div>
        <div>
          <div id="add-text">
            <p className="plus">+</p>
          </div>
        </div>
      </div>
    </div>
  )
};


export default App;
