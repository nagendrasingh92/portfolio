import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StyledFooter from './StyledFooter';
import './index.scss';

const Footer = () => {
    return (
        <StyledFooter>
            <div className='footerWrap'>
                <div className='personDetailsWrap'>
                    <span className='iconWrap'>
                        <EmailIcon />
                    </span>
                    <span className='titleDetailWrap'>nagendra.chauhan2001@gmail.com</span>
                </div>
                <div className='personDetailsWrap'>
                    <span className='iconWrap'>
                        <PhoneIcon />
                    </span>
                    <span className='titleDetailWrap'>+91 7737957798</span>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;