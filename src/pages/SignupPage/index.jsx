import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Button, InputAdornment, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../store/reducers/adminPortal/adminPortalSlice';
import { validationSignUpSchema } from '../../utils/validations/authValidation';
import './index.scss';

const SignupPage = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData.userData);
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        switch (route) {
            case 'signIn':
                navigate('/signin');
                break;
            default:
                break;
        }
    }
    const submitHandler = (values) => {
        alert(JSON.stringify(values, null, 2));
        if (values) {
            const isUserExists = userData.some(user => user.email === values.email)
            if (isUserExists) {
                alert('email already exist.')
            } else {
                const newUserTemp = [...userData, { ...values, id: Date.now() }]
                dispatch(addUser(newUserTemp));
                alert('User added successfully!');
            }
        }
    }
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSignUpSchema,
        onSubmit: submitHandler,
    });
    const {
        handleSubmit,
        values: { fullName, username, password, email, confirmPassword } = {},
        touched: {
            fullName: tucFullName = false,
            email: tucEmail = false,
            username: tucUsername = false,
            password: tucPassword = false,
            confirmPassword: tucConfirmPassword = false
        } = {},
        errors: {
            fullName: errFullName,
            email: errEmail,
            username: errUsername,
            password: errPassword,
            confirmPassword: errConfirmPassword

        } = {},
    } = formik;
    const handleChange = (event) => {
        formik.setFieldValue(event.target.name, event.target.value.trim())
    }
    return (
        <div className="signupPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    Sign Up
                </span>
            </div>
            <div className='signupPageContentWrap'>
                <div className='headerButtonWrap'>
                    <span className='buttonWrap'>
                        <Button
                            fullWidth
                            variant='standard'
                            startIcon={<PersonIcon />}
                            sx={{
                                borderRadius: '0.6rem',
                                padding: '1rem',
                                border: '1px solid grey',
                            }}
                            onClick={() => handleNavigate('signIn')}
                        >
                            Sign In
                        </Button>
                    </span>
                    <span className='buttonWrap'>
                        <Button
                            fullWidth
                            variant='contained'
                            startIcon={<PersonAddIcon />}
                            sx={{
                                borderRadius: '0.6rem',
                                border: '1px solid grey',
                                padding: '1rem',
                            }}
                        >
                            Sign up
                        </Button>
                    </span>
                </div>
                <form className='signupFormContent' onSubmit={handleSubmit} autoComplete="off">
                    <div className='inputFieldWrap'>
                        <TextField
                            fullWidth
                            id="fullName"
                            label="Name"
                            name="fullName"
                            value={fullName}
                            onChange={(event) => handleChange(event)}
                            error={tucFullName && !!errFullName}
                            helperText={tucFullName ? errFullName : undefined}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='inputFieldWrap'>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(event) => handleChange(event)}
                            error={tucEmail && !!errEmail}
                            helperText={tucEmail ? errEmail : undefined}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='inputFieldWrap'>
                        <TextField
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={username}
                            onChange={(event) => handleChange(event)}
                            error={tucUsername && !!errUsername}
                            helperText={tucUsername ? errUsername : undefined}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='inputFieldWrap'>
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(event) => handleChange(event)}
                            error={tucPassword && !!errPassword}
                            helperText={tucPassword ? errPassword : undefined}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyboardIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className='inputFieldWrap'>
                        <TextField
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => handleChange(event)}
                            error={tucConfirmPassword && !!errConfirmPassword}
                            helperText={tucConfirmPassword ? errConfirmPassword : undefined}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CheckBoxIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <Button
                        startIcon={<PersonAddIcon />}
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{
                            padding: '1rem',
                            borderRadius: '0.5rem',
                        }}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;