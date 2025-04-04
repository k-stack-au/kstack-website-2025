import React, { useEffect, useState } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars(prev => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 100); // Adjust speed of character reveal
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, delay]);
  
  return (
    <h1 className={`animated-text ${className || ''}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className={`char ${index < visibleChars ? 'visible' : ''}`}
          style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
