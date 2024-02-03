import Grid  from '@mui/material/Grid';
import { styled } from '@mui/system';

const CustomGrid = styled(Grid)(() => ({
        padding: 0,
        display: "flex",
        alignItems: "stretch",
        width: "50vw",
        margin: "auto"
}));

export default CustomGrid;