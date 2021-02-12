import React from 'react';

const Home = () => {
  const pageSlip = 500;
  const [text, setText] = React.useState<string[]>([]);
  const [currentWordPosition, setCurrentWordPosition] = React.useState(0);
  const [isReading, setIsReading] = React.useState(false);
  let intervalId: NodeJS.Timeout;
  
  const showText = () => {
    setIsReading(true);
    let i = 0;
    intervalId = setInterval(function() {
      if (i < text.length - 1) {
        setCurrentWordPosition(state => state + 1);
      } else {
        setCurrentWordPosition(state => 0);
        pauseText();
      }
      i++;
    }, pageSlip)
  };
  
  const pauseText = () => {
    setIsReading(false);
    clearInterval(intervalId)
  };

  React.useEffect(() => {
    const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    setText(sampleText.split(' '));
  }, []);
  React.useEffect(() => {
    console.log(currentWordPosition);
    console.log(text);
  }, [currentWordPosition])
  
  const currentWord = text[currentWordPosition]
  const button = isReading
  ?
    <div>
      <span onClick={() => pauseText()} className="current-word">{currentWord}</span>
    </div>
    :
    <div>
      <span onClick={() => showText()} className="current-word">{currentWord}</span>
    </div>
  return (
    <div>
      <div>
        {button}
      </div>
      <div id="add-text">
        <p className="plus">+</p>
      </div>
    </div>
  );
}

export default Home;
