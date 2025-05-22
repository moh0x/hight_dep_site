import React, { useEffect, useState } from 'react';

const Counter = ({ targetNumber, duration = 900 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = Math.ceil(duration / 30); // عدد التحديثات
    const increment = targetNumber / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        current = targetNumber;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 30);

    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return <h1>{count}</h1>;
};

export default Counter;