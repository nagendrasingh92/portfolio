import { useNavigate } from 'react-router-dom';
import signInImage from '../../assets/images/signIn.png';
import signUpImage from '../../assets/images/signUp.png';
import adminPortalImage from '../../assets/images/adminPortal.png';
import './index.scss';

const PortfolioPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        switch (route) {
            case 'signIn':
                navigate('/signin');
                break;
            case 'signUp':
                navigate('/signup');
                break;
            case 'adminPortal':
                navigate('/admin_portal');
                break;
            default:
                break;
        }
    }
    return (
        <div className="portfolioPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    Portfolio
                </span>
            </div>
            <div className='cardsWrap'>
                <div className='cardWrap' onClick={() => handleNavigate('adminPortal')}>
                    <div className='imageWrap'>
                    <img src={adminPortalImage} alt="signIn" />
                    </div>
                    <div className='nameWrap'>
                        Admin Portal
                    </div>
                </div>
                <div className='cardWrap' onClick={() => handleNavigate('signIn')}>
                    <div className='imageWrap'>
                        <img src={signInImage} alt="signIn" />
                    </div>
                    <div className='nameWrap'>
                        Sigin page
                    </div>
                </div>
                <div className='cardWrap' onClick={() => handleNavigate('signUp')}>
                    <div className='imageWrap'>
                        <img src={signUpImage} alt="signUp" />

                    </div>
                    <div className='nameWrap'>
                        Signup page
                    </div>
                </div>
                <div className='cardWrap'>
                    <div className='imageWrap'>
                    </div>
                    <div className='nameWrap'>
                        Calculator
                    </div>
                </div>
                <div className='cardWrap'>
                    <div className='imageWrap'>
                    </div>
                    <div className='nameWrap'>
                        Number Game
                    </div>
                </div>
                <div className='cardWrap'>
                    <div className='imageWrap'>
                    </div>
                    <div className='nameWrap'>
                        Todo List
                    </div>
                </div>
                <div className='cardWrap'>
                    <div className='imageWrap'>
                    </div>
                    <div className='nameWrap'>
                        Weather find
                    </div>
                </div>
                <div className='cardWrap'>
                    <div className='imageWrap'>
                    </div>
                    <div className='nameWrap'>
                        E-commorse
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioPage;