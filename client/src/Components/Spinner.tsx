import React from 'react';
import './Spinner.css'

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <span className="loader"></span>
  );
};

export default Spinner;