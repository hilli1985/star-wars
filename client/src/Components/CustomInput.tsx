import InputBase from '@mui/material/InputBase';
import { Theme, styled } from '@mui/system';


interface CustomInputProps {
  theme: Theme
}


const CustomInput = styled(InputBase)(({ theme }: CustomInputProps)=>({
  color: theme.palette.secondary.contrastText,
  border: `1px solid ${theme.palette.secondary.contrastText}`,
  padding: '1px',
  borderRadius:'5px',
  "&:focus-within": {
    borderColor: theme.palette.secondary.main,
  }
}));

export default CustomInput;