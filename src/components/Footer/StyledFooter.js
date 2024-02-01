import { styled } from '@mui/material/styles';

const StyledFooter = styled('div')(
    ({ theme }) => `
    .footerWrap{
        color: ${theme.palette.customColor.text.main}; 
        display: flex;
        justify-content: end;
        margin-top: 2rem;
        border-top: 3px solid grey;
        padding: 2rem 2rem;
        .personDetailsWrap{
            display: flex;
            align-items: center;
            margin-left: 2rem;
            justify-content: start;
            gap: 0.5rem;
            .iconWrap{
                display: flex;
            }
        }
    } 
`)

export default StyledFooter;