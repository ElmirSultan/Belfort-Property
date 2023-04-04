import React, { useState, useEffect } from 'react';

const NumberCounter = ({ startCount, endCount }) => {
  const [count, setCount] = useState(startCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= endCount) {
          clearInterval(intervalId);
          return endCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [endCount]);

  return <span>{count}</span>;
};

export default NumberCounter;
