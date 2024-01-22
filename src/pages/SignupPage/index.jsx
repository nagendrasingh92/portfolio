import { Button, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { validationSignInSchema } from '../../utils/validations/authValidation';
import { useNavigate } from 'react-router';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './index.scss';


const SignupPage = () => {
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


    const submitHandler = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSignInSchema,
        onSubmit: submitHandler,
    });

    const {
        handleSubmit,
        values: { username, password, email, confirmPassword } = {},
        touched: {
            email: tucEmail = false,
            username: tucUsername = false,
            password: tucPassword = false,
            confirmPassword: tucConfirmPassword = false
        } = {},
        errors: {
            email: errEmail,
            username: errUsername,
            password: errPassword,
            confirmpassword: errConfirmPassword

        } = {},
    } = formik;

    const handleChange = (event) => {
        formik.setFieldValue(event.target.name, event.target.value.trim())
    }

    return (
        <div className="signinPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    Sign Up
                </span>
            </div>
            <div className='signinPageContentWrap'>
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
                <form className='signinFormContent' onSubmit={handleSubmit} autoComplete="off">
                    <div className='inputFieldWrap'>
                        <TextField
                            
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(event) => handleChange(event)}
                            error={tucEmail && !!errEmail}
                            helper={tucEmail ? errEmail : undefined}
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
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={username}
                            onChange={(event) => handleChange(event)}
                            error={tucUsername && !!errUsername}
                            helper={tucUsername ? errUsername : undefined}
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
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(event) => handleChange(event)}
                            error={tucPassword && !!errPassword}
                            helper={tucPassword ? errPassword : undefined}
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
                            required
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => handleChange(event)}
                            error={tucConfirmPassword && !!errConfirmPassword}
                            helper={tucConfirmPassword ? errPassword : undefined}
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