import { styled } from '@mui/material/styles';

const StyledAddTaskForm = styled('div')(
    ({ theme }) => `
    // color: ${theme.palette.customColor.text.main};
    .addTaskFormWrap{
        padding: 1rem 2rem;
        .titleWrap{
            margin-bottom: 1rem;
        }
        .taskTitleWrap{

        }
    }
`)

export default StyledAddTaskForm;