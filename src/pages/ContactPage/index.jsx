import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './index.scss';

const ContactPage = () => {
    return (
        <div className="contactPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    Contact
                </span>
            </div>
            <div className='contactFormWrap'>
                <div className='inputFiledWrap'>
                    <span className='nameWrap'>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            placeholder='Full name'
                            sx={{ width: '100%' }}
                        />

                    </span>
                    <span className='emailWrap'>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            placeholder='Email address'
                            sx={{ width: '100%' }}
                        />
                    </span>
                </div>
                <div className='textAreaWrap'>
                    <TextField
                        multiline
                        placeholder='Your Message'
                        rows={4}
                        maxRows={4}
                        sx={{
                            width: '100%',
                            borderRadius: '1rem'
                        }}
                    />
                </div>

            </div>
            <div className='buttonWrap'>
                <Button
                    variant='contained'
                    sx={{
                        textTransfomr: 'none',
                        borderRadius: '4rem'
                    }}
                >
                    Send Message
                </Button>
            </div>

        </div>
    )
}
export default ContactPage;