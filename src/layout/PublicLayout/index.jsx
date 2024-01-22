import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { publicLayoutNavBarData } from '../../constants/data';
import './index.scss';
import { deleteCurrentUser } from '../../store/reducers/signIn/signInSlice';
function PublicLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUserData = useSelector((state) => state.currentUserData.currentUserData);
    const handleNavigate = (route) => {
        switch (route) {
            case 'About':
                navigate('/');
                break;
            case 'Resume':
                navigate('/resume');
                break;
            case 'Portfolio':
                navigate('/portfolio');
                break;
            case 'Blog':
                navigate('/blog');
                break;
            case 'Contact':
                navigate('/contact');
                break;
            default:
                break;
        }
    }
    const handlelogInOutIcon = () => {
        dispatch(deleteCurrentUser([]))
        navigate('/signIn');

    }
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
                <div className='frontPageNavBarWrap'>
                    {
                        publicLayoutNavBarData?.map((item, index) => (
                            <Button
                                key={index}
                                variant="standard"
                                sx={{ textTransform: 'none' }}
                                onClick={() => handleNavigate(item)}
                            >
                                {item}
                            </Button>
                        ))
                    }
                </div>
                <div className='signInSignOutIconWrap' onClick={() => handlelogInOutIcon()}>
                    {
                        currentUserData.length === 0 ? <LoginIcon /> : <LogoutIcon />
                    }  
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