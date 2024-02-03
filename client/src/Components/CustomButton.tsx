import Button from '@mui/material/Button';
import { Theme, styled } from '@mui/system';

interface IProps {
  theme: Theme
}


const CustomButton = styled(Button)(({ theme }: IProps) => ({

  color:theme.palette.secondary.contrastText, 
  marginLeft: 16, 
  borderColor:theme.palette.secondary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.background.paper, 
    borderColor:theme.palette.secondary.main,
    color: theme.palette.secondary.main
  }
}));

export default CustomButton;