import Button from '@mui/material/Button';
import { Theme, styled } from '@mui/system';

interface CustomButtonProps {
  theme: Theme
}


const CustomButton = styled(Button)(({ theme }: CustomButtonProps) => ({
  color: theme.palette.secondary.contrastText,
  marginLeft: 16,
  borderColor: theme.palette.secondary.contrastText,
  "&:hover": {
    // backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main
  },
  '&.MuiButton-contained': {
    backgroundColor: theme.palette.background.paper,
  },
  '&.MuiButton-outlined': {
    backgroundColor: 'transparent',
  },
})
);

export default CustomButton;