import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CustomButton from './CustomButton';
import { useSearchContext } from '../SearchContext';
import './PaginationButtons.css';

interface PaginationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = () => {
  const { handlePrevious, handleNext, previous, next } = useSearchContext();
  const { theme } = useSearchContext();
  return (
    <div style={{paddingTop: '16px'}}>
      <CustomButton theme={theme} disabled={!previous} onClick={handlePrevious} variant="contained" color="primary" startIcon={<KeyboardArrowLeftIcon />}>
        {'Previous'}
      </CustomButton>
      <CustomButton theme={theme} disabled={!next} onClick={handleNext} variant="contained" color="primary" endIcon={<KeyboardArrowRightIcon />} >
        {'Next'}
      </CustomButton>
    </div>
  );
};

export default PaginationButtons;