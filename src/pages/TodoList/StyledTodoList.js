import { styled } from '@mui/material/styles';

const StyledTodoList = styled('div')(
  ({ theme }) => `
    color: ${theme.palette.customColor.text.main};
`)

export default StyledTodoList;