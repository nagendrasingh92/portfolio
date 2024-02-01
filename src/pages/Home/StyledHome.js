import { styled } from '@mui/material/styles';

const StyledHome = styled('div')(
    ({ theme }) => `
  .homePageWrap {
    color: ${theme.palette.customColor.text.main};
  }
`)

export default StyledHome;