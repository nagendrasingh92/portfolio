import { Button } from '@mui/material';
import { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import StyledTodoList from './StyledTodoList';
const array = []
const TodoList = () => {
    const [taskArr, setTaskArr] = useState(array);
    const [openTaskForm, setOpenTaskForm] = useState(false);
    const handleCloseTaskForm = () => {
        setOpenTaskForm(false);
    }
    const handleTaskSubmit = (data) => {
        taskArr.push(data)
    }
    const handleAddTask = () => {
        setOpenTaskForm(true)
        setTaskArr()
    }
    return (
        <StyledTodoList>
            <div className='taskListWrap'>
                <div>
                    <div className='buttonWrap'>
                        <Button
                            variant='contained'
                            onClick={handleAddTask}
                        >
                            Add Task
                        </Button>
                        <AddTaskForm
                            open={openTaskForm}
                            onClose={handleCloseTaskForm}
                            handleTaskSubmit={handleTaskSubmit}
                        />
                    </div>
                </div>
                <div className='taskContainerWrap'>
                    {
                        taskArr?.map((item, index) => (
                            <div key={index}>{item.title}</div>
                        ))
                    }
                </div>
            </div>
        </StyledTodoList>
    )
}
export default TodoList;