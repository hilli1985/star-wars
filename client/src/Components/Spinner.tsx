import React from 'react';
import './Spinner.css'

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = 'primary' }) => {
  return (
    <span className="loader"></span>
  );
};

export default Spinner;