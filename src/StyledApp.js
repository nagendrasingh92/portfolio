import { styled } from '@mui/material/styles';

const StyledApp = styled('div')(
    ({ theme }) => `
    .App {
        text-align: center;
        background-color: ${theme.palette.customColor.background.default};
    }     
`)

export default StyledApp;