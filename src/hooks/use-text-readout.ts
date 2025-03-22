import { useState, useRef, useEffect } from 'react';

export const useTextReadout = (pageSlip: number) => {
  const [text, setText] = useState<string[]>([]);
  const [currentWordPosition, setCurrentWordPosition] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const currentTimer = useRef<NodeJS.Timeout>();

  const startReadout = (startPosition: number) => {
    currentTimer.current = setInterval(function () {
      if (startPosition < text.length - 1) {
        setCurrentWordPosition((state) => state + 1);
      } else {
        setCurrentWordPosition(0);
        stopText();
      }
      startPosition++;
    }, pageSlip);
  };

  const stopText = () => {
    setIsReading(false);
    clearInterval(currentTimer.current);
  };

  const resumeText = () => {
    setIsReading(true);
    startReadout(currentWordPosition);
  };

  useEffect(() => {
    const sampleText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    setText(sampleText.split(' '));
  }, []);

  return {
    text,
    currentWordPosition,
    isReading,
    setIsReading,
    startReadout,
    stopText,
    resumeText,
  };
};
