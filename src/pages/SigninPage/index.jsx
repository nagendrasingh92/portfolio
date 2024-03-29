import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Button, InputAdornment, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardIcon from '@mui/icons-material/Keyboard';
// import { useDispatch, useSelector } from 'react-redux';
// import { currentUser } from '../../store/reducers/signIn/signInSlice';
import { validationSignInSchema } from '../../utils/validations/authValidation';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase-config';
import './index.scss';
import StyledSigninPage from './StyledSigninPage';

const SigninPage = () => {
    // const dispatch = useDispatch();
    // const userData = useSelector((state) => state.userData.userData);
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        switch (route) {
            case 'signUp':
                navigate('/signup');
                break;
            default:
                break;
        }
    }
    const submitHandler = async (values) => {
        // const currentUserTemp = userData.filter((item) =>
        //     item.username === values.username && item.password === values.password
        // )
        // if (currentUserTemp.length === 0) {
        //     alert('No user exist please signup')
        // } else {
        //     dispatch(currentUser(currentUserTemp))
        //     localStorage.setItem('auth', JSON.stringify(currentUserTemp))
        //     navigate('/');
        // }

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                values.username,
                values.password
            );
            navigate('/');
            console.log('userSignIn', user)
        } catch (error) {
            console.log(error.message)
        }
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSignInSchema,
        onSubmit: submitHandler,
    });
    const {
        handleSubmit,
        values: { username, password } = {},
        touched: {
            username: tucUsername = false,
            password: tucPassword = false
        } = {},
        errors: {
            username: errUsername,
            password: errPassword
        } = {},
    } = formik;
    const handleChange = (event) => {
        formik.setFieldValue(event.target.name, event.target.value.trim())
    }
    return (
        <StyledSigninPage>
            <div className="signinPageWrap">
                <div className="titleWrap">
                    <span className='horizontalLine'>
                        Sign In
                    </span>
                </div>
                <div className='signinPageContentWrap'>
                    <div className='headerButtonWrap'>
                        <span className='buttonWrap'>
                            <Button
                                startIcon={<PersonIcon />}
                                fullWidth
                                variant='contained'
                                sx={{
                                    borderRadius: '0.6rem',
                                    padding: '1rem',
                                }}
                            >
                                Sign In
                            </Button>
                        </span>
                        <span className='buttonWrap'>
                            <Button
                                startIcon={<PersonAddIcon />}
                                fullWidth
                                variant='standard'
                                sx={{
                                    borderRadius: '0.6rem',
                                    border: '1px solid grey',
                                    padding: '1rem',
                                }}
                                onClick={() => handleNavigate('signUp')}
                            >
                                Sign up
                            </Button>
                        </span>
                    </div>
                    <form className='signinFormContent' onSubmit={handleSubmit} autoComplete='off'>
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
                        <Button
                            startIcon={<KeyIcon />}
                            type='submit'
                            variant='contained'
                            fullWidth
                            sx={{
                                padding: '1rem',
                                borderRadius: '0.5rem',
                            }}
                        >
                            Sign In
                        </Button>
                    </form>
                    <div className='hintWrap'>
                        Only admin can check admin portal <br />
                        for Admin UserName:- mailto:admin@gmail.com, password:- admin123<br />
                        for guest userName:- mailto:guest@gmail.com, passwrod:- guest123
                    </div>
                </div>
            </div>
        </StyledSigninPage>
    )
}

export default SigninPage;