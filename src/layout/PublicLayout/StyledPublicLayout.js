import { styled } from '@mui/material/styles';

const StyledPublicLayout = styled('div')(
    ({ theme }) => `
    .publicLayoutWrap {
        margin: 4.4rem 3rem 2rem 3rem;
        position: relative;
        background-color: ${theme.palette.customColor.background.paper};
    
        .frontPageWrap {
            min-height: 12rem;
            border-radius: 1.5rem;
            position: relative;
    
            .signInSignOutIconWrap {
                position: absolute;
                right: 1rem;
                top: 1rem;
            }
        }
    }
`)

export default StyledPublicLayout;