import { styled } from '@mui/material/styles';

const StyledAddTaskForm = styled('div')(
    ({ theme }) => `
    color: ${theme.palette.customColor.text.main};
`)

export default StyledAddTaskForm;