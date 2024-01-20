import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PropTypes from 'prop-types';
import './index.scss';
import { Button } from '@mui/material';
function PublicLayout({ children }) {
    return (
        <div className='publicLayoutWrap'>
            <div className='sideBarWrap'>
                <div className='userIconWrap'>
                    <PersonIcon style={{ width: '100%', height: '100%' }} />
                </div>
                <div className='nameWrap'>Nagendra Singh</div>
                <div className='jobTitleWrap'>Web developer</div>
                <hr style={{ width: '80%' }} />
                <div className='personDetailsWrap'>
                    <span className='iconWrap'>
                        <EmailIcon />
                    </span>
                    <span className='titleGroupWrap'>
                        <div className='titlewrap'>EMAIL</div>
                        <span className='titleDetailWrap'>nagendra.chauhan2001@gmail.com</span>
                    </span>
                </div>
                <div className='personDetailsWrap'>
                    <span className='iconWrap'>
                        <PhoneIcon />
                    </span>
                    <span className='titleGroupWrap'>
                        <div className='titlewrap'>PHONE</div>
                        <span className='titleDetailWrap'>+91 7737957798</span>
                    </span>
                </div>
            </div>
            <div className='frontPageWrap'>
                <div className='fontPageNavBarWrap'>
                    <Button
                        variant="standard"
                        className='itemWrap'
                        sx={{ textTransform: 'none' }}
                    >
                        About
                    </Button>
                    <Button
                        variant="standard"
                        className='itemWrap'
                        sx={{ textTransform: 'none' }}

                    >
                        Resume
                    </Button>
                    <Button
                        variant="standard"
                        className='itemWrap'
                        sx={{ textTransform: 'none' }}

                    >
                        Portfolio
                    </Button>
                    <Button
                        variant="standard"
                        className='itemWrap'
                        sx={{ textTransform: 'none' }}

                    >
                        Blog
                    </Button>
                    <Button
                        variant="standard"
                        className='itemWrap'
                        sx={{ textTransform: 'none' }}

                    >
                        Contact
                    </Button>
                </div>
                {children}
            </div>
        </div>
    )
}
PublicLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicLayout;