import { Dialog, TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { validationTaskFormSchema } from '../../../utils/validations/authValidation';
import StyledAddTaskForm from './StyledAddTaskForm';

const AddTaskForm = (props) => {
    const { open, onClose, handleTaskSubmit } = props;
    AddTaskForm.propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        handleTaskSubmit: PropTypes.func.isRequired,
    };

    const submitHandler = (values) => {
        const arrTemp = { id: Date.now(), status: false }
        handleTaskSubmit(arrTemp)
        handleClose();
        console.log('addTaskForm', values)
    }
    const formik = useFormik({
        initialValues: {
            taskTitle: '',
            taskDescription: '',
            startDate: '',
            endDate: '',

        },
        validationSchema: validationTaskFormSchema,
        onSubmit: submitHandler,
    });


    const {
        handleSubmit,
        values: {
            taskTitle,
            taskDescription,
            startDate,
            endDate,
        } = {},
        touched: {
            taskTitle: tucTaskTitle = false,
            taskDescription: tucTaskDescription = false,
            startDate: tucStartDate = false,
            endDate: tucEndDate = false,
        } = {},
        errors: {
            taskTitle: errTaskTitle,
            taskDescription: errTaskDescription,
            startDate: errStartDate,
            endDate: errEndDate,
        } = {},
    } = formik;

    const handleChange = (event) => {
        formik.setFieldValue(event.target.name, event.target.value)
    }
    const handleClose = () => {
        formik.resetForm();
        onClose();
    }

    const handleDateChange = (date, name) => {
        formik.setFieldValue(name, date)
    }

    return (
        <StyledAddTaskForm>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxWidth: '900px',
                        width: '900px',
                        margin: 'auto',
                    }
                }}
            >
                <form className='formWrap' onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                    <div className='titleWrap'>
                        Add Task
                    </div>
                    <div className='taskTitleWrap'>
                        <TextField
                            name="taskTitle"
                            value={taskTitle}
                            onChange={handleChange}
                            placeholder="Enter task"
                            error={tucTaskTitle && !!errTaskTitle}
                            helperText={tucTaskTitle && errTaskTitle}
                        />
                    </div>
                    <div className='startDateWrap'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                name="startDate"
                                variant="inline"
                                openTo="year"
                                value={startDate}
                                onChange={(date) => handleDateChange(date, 'startDate')}
                                placeholder="select"
                                error={tucStartDate && !!errStartDate}
                                helperText={tucStartDate && errStartDate}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='endDateWrap'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                name="endDate"
                                variant="inline"
                                openTo="year"
                                value={endDate}
                                onChange={(date) => handleDateChange(date, 'endDate')}
                                placeholder="select"
                                error={tucEndDate && !!errEndDate}
                                helperText={tucEndDate && errEndDate}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='taskDescriptionWrap'>
                        <TextField
                            name="taskDescription"
                            value={taskDescription}
                            onChange={handleChange}
                            placeholder="Enter task details"
                            error={tucTaskDescription && !!errTaskDescription}
                            helperText={tucTaskDescription && errTaskDescription}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </Dialog>
        </StyledAddTaskForm>
    )
}

export default AddTaskForm;