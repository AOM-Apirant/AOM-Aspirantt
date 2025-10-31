'use client';

import React, { useEffect, useState } from 'react';

interface DigitalCounterProps {
  value: number;
  duration?: number;
  className?: string;
  digits?: number; // Number of digits to display (with leading zeros)
}

const DigitalCounter: React.FC<DigitalCounterProps> = ({ 
  value, 
  duration = 1000,
  className = '',
  digits = 8 // Default 8 digits (00000000)
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (value === displayValue) return;

    const startValue = displayValue;
    const endValue = value;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, displayValue]);

  // Format number with leading zeros
  const formattedValue = displayValue.toString().padStart(digits, '0');

  return (
    <span 
      className={`digital-counter-display inline-block ${className}`}
    >
      {formattedValue.split('').map((digit, index) => (
        <span key={index} className="digital-digit">
          {digit}
        </span>
      ))}
    </span>
  );
};

export default DigitalCounter;

