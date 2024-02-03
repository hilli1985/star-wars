import Card from '@mui/material/Card';
import { styled } from '@mui/system';

const CustomCard = styled(Card)(({ theme }) => ({
  ...(theme.components?.MuiCard?.styleOverrides?.root || {}),
  padding: 8,
  height: '200px',
  position:'relative',
  margin: 16,
  alignItems:'left'
}));

export default CustomCard;