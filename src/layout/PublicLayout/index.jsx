import PropTypes from 'prop-types';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StyledPublicLayout from './StyledPublicLayout';
const PublicLayout = ({ children }) => {
    const navigate = useNavigate();
    const currentUser = auth.currentUser

    const handlelogInOutIcon = () => {
        logOut()
        navigate('/signin');
    }
    const logOut = async () => {
        await signOut(auth)
    }
    return (
        <StyledPublicLayout>
            <div className='publicLayoutWrap'>
                <Header />
                <div className='frontPageWrap'>
                    <div className='signInSignOutIconWrap' onClick={() => handlelogInOutIcon()}>
                        {
                            currentUser && currentUser.email ? <LoginIcon /> : <LogoutIcon />
                        }
                    </div>
                    {children}
                </div>
                <Footer />
            </div>
        </StyledPublicLayout>

    )
}
PublicLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicLayout;