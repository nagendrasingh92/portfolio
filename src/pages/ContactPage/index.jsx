import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { validationContactSchema } from '../../utils/validations/authValidation';
import StyledContactPage from './StyledContactPage';
const ContactPage = () => {
    const submitHandler = async (values) => {
        values.preventDefault();
        const { guestName, email, message } = values;
        const res = fetch(
            `${process.env.REACT_APP_FIREBASE}/userData.json`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    guestName, email, message
                })
            }
        )
        if (res) {
            alert("success")
        } else {
            alert('fail')
        }
    }

    const formik = useFormik({
        initialValues: {
            guestName: '',
            email: '',
            message: ''

        },
        validationSchema: validationContactSchema,
        onSubmit: submitHandler,
    });

    const {
        handleSubmit,
        vlaues: { guestName, email, message } = {},
        touched: {
            guestName: tucGuestName = false,
            email: tucEmail = false,
            message: tucMessage = false,
        } = {},
        errors: {
            guestName: errGuestName,
            email: errEmail,
            message: errMessage
        } = {},
    } = formik;

    const handleChange = (event) => {
        formik.setFieldValue(event.target.name, event.target.value.trim())
    }
    return (
        <StyledContactPage>
            <div className="contactPageWrap">
                <div className="titleWrap">
                    <span className='horizontalLine'>
                        Contact
                    </span>
                </div>
                <form className='signinFormContent' onSubmit={handleSubmit} autoComplete='off'>
                    <div className='contactFormWrap'>
                        <div className='inputFiledWrap'>
                            <span className='nameWrap'>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    name="guestName"
                                    value={guestName}
                                    variant="outlined"
                                    placeholder='Full name'
                                    sx={{ width: '100%' }}
                                    onChange={(event) => handleChange(event)}
                                    error={tucGuestName && !!errGuestName}
                                    helperText={tucGuestName ? errGuestName : undefined}
                                />
                            </span>
                            <span className='emailWrap'>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    name="email"
                                    vlaue={email}
                                    variant="outlined"
                                    placeholder='Email address'
                                    sx={{ width: '100%' }}
                                    onChange={(event) => handleChange(event)}
                                    error={tucEmail && !!errEmail}
                                    helperText={tucEmail ? errEmail : undefined}
                                />
                            </span>
                        </div>
                        <div className='textAreaWrap'>
                            <TextField
                                multiline
                                placeholder='Your Message'
                                maxRows={4}
                                name="message"
                                value={message}
                                sx={{
                                    width: '100%',
                                    borderRadius: '1rem'
                                }}
                                onChange={(event) => handleChange(event)}
                                error={tucMessage && !!errMessage}
                                helperText={tucMessage ? errMessage : undefined}
                            />
                        </div>
                    </div>
                    <div className='buttonWrap'>
                        <Button
                            type="submit"
                            variant='contained'
                            sx={{
                                textTransfomr: 'none',
                                borderRadius: '4rem'
                            }}
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </StyledContactPage>
    )
}
export default ContactPage;